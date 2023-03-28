// const express = require("express");
// const recipeRouter = express.Router();
// const {Op} = require("sequelize")
// const {Recipe, Diet} = require("../db");


// const apiData = require("../controller/index");

// recipeRouter.get('/', async (req, res) => {
//   try {
//     const recipes = await Recipe.findAll({
//       include: Diet
      
//     });
//     res.json(recipes);
//   } catch (error) {
//    res.status(404).json({msj: "df"})
//   }

// });

// // let recipes = []
// // let 

// // const isUUID = idRecipe.split('').some(e => isNaN(e))
// // recipeRouter.get("/:idRecipe", async (req, res) => {
// //   const {idRecipe} = req.params;
// //   try {
    
 
// // });
// // recipeRouter.get('/:id', async (req, res) => {
// //   const {id} = req.params;
// //   try {
// //     const detail = await Recipe.findOne({
// //       where: {
// //         id: id,
// //       },
// //       include: Diet,
// //     });
// //     if (detail) {/////////////////OPCIONAL
// //       res.render('recipe', {
// //         title: detail.title,
// //         description: detail.description,
// //       });
// //     } else {
// //       res.status(404).send('Recipe not found');
// //     }
// //   } catch (error) {
// //     console.log(error);
// //     res.status(500).send('Server error');
// //   }
// // });
// // console.log(savedApi().then(dat => console.log(dat)))
// recipeRouter.get('/:id', async (req, res) => {
//   const {id} = req.params;
//   try {
//     //  detail = {}
//     let test = id.split('').some(e => isNaN(e))
//       if(test){
//        let detail = await Recipe.findOne({///VALIDO
//             where: {
//                   id: id,
//                 },
//               include: Diet
//             })
//           // detail.id = parseInt(detail.id.replace(/-/g, ''), id);
//           // await  console.log(detail); // <-- imprimir detalles de la receta en consola
//           res.status(200).json(detail)
          
//         } else {
//           res.status(404).json({names: "el error persite"})
//         }
        
//       } catch (error) {
//         console.log(error);
//         res.status(500).send("Server error");
//       }
// });
// // apidata
// // recipeRouter.get("/name", )
// // recipeRouter.post('/recipes', async (req, res) => {
// //   const { name, summary, healthScore, diets, image, steps } = req.body;
// //   try {
// //     let newRecipe = await Recipe.create({
//   //       name,
//   //       summary,
//   //       healthScore,
//   //       image,
//   //       steps
//   //     });
//   //     let dietInstances = await Promise.all(
//     //       diets.map(dietName => Diet.findOrCreate({ where: { name: dietName } }))
//     //     );
//     //     await newRecipe.addDiets(dietInstances.map(diet => diet[0]));
//     //     res.status(201).send(newRecipe);
//     //   } catch (error) {
//       //     console.log(error);
// //     res.status(500).send('Internal server error');
// //   }
// // });

// // recipeRouter.get("/", async (req, res) => {
//   //   let {name} = req.query;
//   //   try {
//     //     let nuevo =  savedApi()
    
//     //     let recipeName = await Recipe.findAll({
//       //       where: {
//         //         name: {
//           //           [Op.iLike]: `%${name}%`,
//           //         },
//           //       },
          
//           //     });
//           //     if(recipeName.length === 0) {
//             //       // nuevo.push(recipeName)
//             //      return res.status(200).json(recipeName[0])
            
//             //     } else {
//               //       // nuevo.push(recipeName)
//               //       res.status(400).json({message: "recipe not found"})
//               //     }
              
// //   } catch (error) {
//   //     res.status(500).json(error)
//   //   }
  
// // })















// recipeRouter.get("/", async (req, res) => {
//   let { name } = req.query;

//   try {
//     let recipes = await Recipe.findAll({
//       where: {
//           name: {
//               [Op.iLike]: `%${name}%`,
//             },
//           },
//           include: Diet,
//         });
    
//         if (recipes.length > 0) {
//             res.json(recipes);
//           } else {
//               res.status(404).json({ message: "Recipe not found" });
//             }
//           } catch (error) {
// res.status(500).json(error);
// }
// });





// // recipeRouter.get("/", async (req, res) => {
// //   try {
// //     let { name } = req.query;
// //     let totalRecipes = await savedApi();
    
// //     if (name) {
// //       let recipeName = totalRecipes.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
// //       res.status(200).json(recipeName);
// //     } else {
// //       res.status(400).json({ message: "Bad request: name parameter is missing" });
// //     }
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json("Internal Server Error");
// //   }
// // });


// // let id = 1
// recipeRouter.post("/", async (req, res) => {
//   const { name, summary, healthScore, steps, image, diets } = req.body;

//   try {
//     const newRecipe = await Recipe.create({
//       name,
//       summary,
//       healthScore,
//       steps,
//       image
//     });
  
//     if (Array.isArray(diets)) {
//       const dietInstances = await Promise.all(diets.map(async (diet) => {
//         const [dietInstance] = await Diet.findOrCreate({ where: { name: diet } });
//         return dietInstance;
//       }));
//       await newRecipe.addDiets(dietInstances);
//     }
  
//     res.status(200).json(newRecipe);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// })




// module.exports = recipeRouter;


