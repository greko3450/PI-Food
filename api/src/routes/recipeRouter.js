const express = require("express");
const recipeRouter = express.Router();
const {Op} = require("sequelize")
const {Recipe, Diet} = require("../db");
const savedApi = require("../controller/index.js")
savedApi()

// ruta get por params
recipeRouter.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    
    let test = id.split('').some(e => isNaN(e))
      if(test){
       let detail = await Recipe.findOne({///VALIDO
            where: {
                  id: id,
                },
              include: Diet
            })
        
          res.status(200).json(detail)
          
        } else {
          res.status(404).json({names: "el error persite"})
        }
        
      } catch (error) {
        res.status(500).json({message: error.message});
        
      }
});


//ruta get por query
recipeRouter.get("/", async (req, res) => {
  let { name } = req.query;

  try {
    let recipes;
    if (name) {
      recipes = await Recipe.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: Diet,
      });
    } 
else {
      recipes = await Recipe.findAll({
        include: {
          model: Diet,

        }
      });
    }
    if (recipes.length > 0) {
      res.status(200).json(recipes);
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});
//ruta Post

recipeRouter.post("/", async (req, res) => {
  
  try {
    const { name, summary, healthScore, steps, image, diets } = req.body;
    const nameExisting = await Recipe.findOne({where: {name}});
    if(nameExisting) {
     return res.status(400).json({message: `"Recipe ${name} already exists`})
    }
    const newRecipe = await Recipe.create({
      name,
      summary,
      healthScore,
      steps,
      image
    });
  
    if (Array.isArray(diets)) {
      const dietInstances = await Promise.all(diets.map(async (diet) => {
        const [dietInstance] = await Diet.findOrCreate({ where: { name: diet } });
        return dietInstance;
      }));
      await newRecipe.addDiets(dietInstances);
    } else {
      res.status(404).json({message: "Not create recipe"})
    }
  
    res.status(200).json(newRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

module.exports = recipeRouter;














