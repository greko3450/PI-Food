const express = require("express");
const recipeRouter = express.Router();
const {Op} = require("sequelize")
const {Recipe, Diet} = require("../db");

//ruta get por params
recipeRouter.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    //  detail = {}
    let test = id.split('').some(e => isNaN(e))
      if(test){
       let detail = await Recipe.findOne({///VALIDO
            where: {
                  id: id,
                },
              include: Diet
            })
          // detail.id = parseInt(detail.id.replace(/-/g, ''), id);
          // await  console.log(detail); // <-- imprimir detalles de la receta en consola
          res.status(200).json(detail)
          
        } else {
          res.status(404).json({names: "el error persite"})
        }
        
      } catch (error) {
        console.log(error);
        res.status(500).json({names: "el error"});
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
    } else {
      recipes = await Recipe.findAll({
        include: Diet,
      });
    }

    if (recipes.length > 0) {
      res.status(200).json(recipes);
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
//ruta Post

recipeRouter.post("/", async (req, res) => {
  const { name, summary, healthScore, steps, image, diets } = req.body;

  try {
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
    }
  
    res.status(200).json(newRecipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

module.exports = recipeRouter;














