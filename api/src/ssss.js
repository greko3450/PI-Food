// const express = require('express');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const router = require('./routes/index.js');

// require('./db.js');

// const server = express();

// server.name = 'API';

// server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
// server.use(bodyParser.json({ limit: '50mb' }));
// server.use(cookieParser());
// server.use(morgan('dev'));
// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*' /* 'http://localhost:3000' */); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });

// server.use('/', router);

// // Error catching endware.
// server.use((err, req, res, next) => {
//   // eslint-disable-line no-unused-vars
//   const status = err.status || 500;
//   const message = err.message || err;
//   console.error(err);
//   res.status(status).send(message);
// });

// module.exports = server;


// GET | /recipes/name?="..."
// Esta ruta debe obtener todas aquellas recetas que coincidan con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarla independientemente de mayúsculas o minúsculas.
// Si no existe la receta, debe mostrar un mensaje adecuado.
// Debe buscar tanto las de la API como las de la base de datos.

// [{
//     "id": "53db01eb-6b16-432c-810c-2fc322722826",
//     "name": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
//     "summary": "Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 192 calories, 7g of protein, and 6g of fat per serving. For $1.12 per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about 30 minutes. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an awesome spoonacular score of 100%. Users who liked this recipe also liked Vegetable Fried Brown Rice, Vegetable Fried Cauliflower Rice, and Easy Vegetable Fried Brown Rice with Egg.",
//     "healthScore": 76,
//     "steps": [
//       "<b>1</b>   Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\" ",
//       "<b>2</b>   Heat 1T butter and 1T oil in a large skillet over medium heat. ",
//       "<b>3</b>   Add garlic and the white and light green pieces of scallion. Sauté about a minute. ",
//       "<b>4</b>   Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again. ",
//       "<b>5</b>   Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom. ",
//       "<b>6</b>   Let it sit for about two minutes—so the rice can get toasted and a little crispy. ",
//       "<b>7</b>   Add the peas and broccoli and stir again. ",
//       "<b>8</b>   Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat. ",
//       "<b>9</b>   Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice. "
//     ],
//     "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
//     "created": true,
//     "createdAt": "2023-03-17T22:45:55.463Z",
//     "updatedAt": "2023-03-17T22:45:55.463Z",
//     "Diets": [
//       {
//         "id": "239d2e24-fd8e-4936-8936-7b2489675a22",
//         "name": "gluten free",
//         "createdAt": "2023-03-17T22:12:51.414Z",
//         "updatedAt": "2023-03-17T22:12:51.414Z",
//         "Recipe_Diet": {
//           "createdAt": "2023-03-17T22:45:55.508Z",
//           "updatedAt": "2023-03-17T22:45:55.508Z",
//           "RecipeId": "53db01eb-6b16-432c-810c-2fc322722826",
//           "DietId": "239d2e24-fd8e-4936-8936-7b2489675a22"
//         }
//       },
//       {
//         "id": "ad2677c1-939a-4bda-a7ab-3f5dbc6c6359",
//         "name": "dairy free",
//         "createdAt": "2023-03-17T22:12:51.436Z",
//         "updatedAt": "2023-03-17T22:12:51.436Z",
//         "Recipe_Diet": {
//           "createdAt": "2023-03-17T22:45:55.518Z",
//           "updatedAt": "2023-03-17T22:45:55.518Z",
//           "RecipeId": "53db01eb-6b16-432c-810c-2fc322722826",
//           "DietId": "ad2677c1-939a-4bda-a7ab-3f5dbc6c6359"
//         }
//       },
//       {
//         "id": "d5cb1359-a9d8-4573-9d25-66fb3034eeea",
//         "name": "lacto ovo vegetarian",
//         "createdAt": "2023-03-17T22:12:51.446Z",
//         "updatedAt": "2023-03-17T22:12:51.446Z",
//         "Recipe_Diet": {
//           "createdAt": "2023-03-17T22:45:55.524Z",
//           "updatedAt": "2023-03-17T22:45:55.524Z",
//           "RecipeId": "53db01eb-6b16-432c-810c-2fc322722826",
//           "DietId": "d5cb1359-a9d8-4573-9d25-66fb3034eeea"
//         }
//       },
//       {
//         "id": "be8935ae-1856-4722-a1f9-fcd920a29056",
//         "name": "vegan",
//         "createdAt": "2023-03-17T22:12:51.456Z",
//         "updatedAt": "2023-03-17T22:12:51.456Z",
//         "Recipe_Diet": {
//           "createdAt": "2023-03-17T22:45:55.530Z",
//           "updatedAt": "2023-03-17T22:45:55.530Z",
//           "RecipeId": "53db01eb-6b16-432c-810c-2fc322722826",
//           "DietId": "be8935ae-1856-4722-a1f9-fcd920a29056"
//         }
//       }
//     ]
//   }]



//   // const axios = require("axios");
//   // const { Recipe, Diet } = require("../db.js");
  
//   let apiData = async () => {
//     try {
//       const saveData = await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`);
//       const data = saveData.data;
  
//       return data.map(recipe => {
//         return {
//           id: recipe.id,
//           name: recipe.title,
//           summary: recipe.summary.replace(/<[^>]+>/g, ''),
//           healthScore: recipe.healthScore,
//           diets: recipe.diets,
//           image: recipe.image,
  
//           steps: recipe.analyzedInstructions[0]?.steps?.map(step => {
//             return `<b>${step.number}</b>   ${step.step} `;
//           }) || []
//         };
//       });
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   };
  
//   const savedApi = async () => {
//     try {
//       const data = await apiData();
//       for (let i = 0; i < data.length; i++) {
//         try {
//           const { name, summary, healthScore, image, steps, diets } = data[i];
//           const recipe = await Recipe.create({ name, summary, healthScore, image, steps });
//           if (Array.isArray(diets)) {
//             const dietObjects = await Promise.all(diets.map(dietName => Diet.findOrCreate({ where: { name: dietName } })));
//             const dietArray = dietObjects.map(dietObject => dietObject[0]);
//             await recipe.addDiets(dietArray);
//           }
//         } catch (error) {
//           console.error(error);
//         }
//       }
//       const recipes = await Recipe.findAll({ include: Diet });
//       return recipes;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   };
  
//   module.exports = savedApi;
  

// //**************************** */








// // const axios = require("axios")
// // const {Recipe, Diet} = require("../db.js")

// // require("dotenv").config()
// // const {API_KEY} = process.env
// // let recipeId = (idRecipe) => {
// //   let recipe = Recipe.findByPk(idRecipe, {
// //     include: Diet
// //   })
// // return recipe
// // }
// //  INICIAMOS EL LLAMADO A LA API

// let apiData = async() => {
//   // let recipe = []
//   try {
//     const saveData = await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)
//     // const saveData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
//     const data = saveData.data.results?.map(recipe => {

      
//     // console.log(data); 

//  // const recipeSteps = recipe.analyzedInstructions[0]?.steps?.map((step) => {
//     //   return `<h3>${step.number}</h3>   ${step.step} `;
//     // })


//     // steps: JSON.stringify(recipeSteps)


//     return {
//       id: recipe.id,
//       name: recipe.title,
//       summary: recipe.summary.replace(/<[^>]+>/g, ''),
//       healthScore: recipe.healthScore,
//       diets: recipe.diets,
//       image: recipe.image,
//       // steps: recipe.analyzedInstructions[0]?.steps?.map((e) => e.step??e.step).join()
//       steps: recipe.analyzedInstructions[0]?.steps?.map((step) => {
//         return `<b>${step.number}</b>   ${step.step} `
//       })
        
// };
     
    
//   })
  
 
//   return data
//   } catch (error) {
//     console.log(error)
//   }
// }

// // const savedApi = async () => {
// //   const data =  apiData();
// //   await Promise.all(
// //    await data.map(async ({ name, summary, healthScore, image, steps, diets }) => {
// //       const recipe = await Recipe.create({ 
// //         name, 
// //         summary, 
// //         healthScore, 
// //         image, 
// //         steps 
// //       });
// //       await Promise.all(
// //         diets.map(async (dietName) => {
// //           const [diet] = await Diet.findOrCreate({ where: { name: dietName } });
// //           await recipe.addDiet(diet);
// //         })
// //       );
// //     })
// //   );
// // };

// // module.exports = savedApi;


// // module.exports = savedApi;





// const savedApi = async () => {
//   try {
//     const data = await apiData();
//     for (let i = 0; i < data.length; i++) {
//       // try {
//         const { name, summary, healthScore, image, steps, diets } = data[i];
//         const recipe = await Recipe.create({ name, summary, healthScore, image, steps });
//         if (Array.isArray(diets)) { // si diets es un array 
//           for (let j = 0; j < diets.length; j++) {
//             const diet = await Diet.findOrCreate({ where: { name: diets[j] } });
//             await recipe.addDiet(diet[0]);
//           }
//         }
//       // } catch (error) {
//       //   console.log(error);
//       // }
//     }
//     // const recipes = await Recipe.findAll({ include: Diet });
//     // return recipes;
//   } catch (error) {
//     console.log(error);
//   }
// };



// // const savedApi = async () => {
// //   try {
// //     const data = await apiData();
// //     for (let i = 0; i < data.length; i++) {
// //       try {
// //         const { name, summary, healthScore, image, steps, diets } = data[i];
// //         const recipe = await Recipe.create({ name, summary, healthScore, image, steps });
// //         if (Array.isArray(diets)) {
// //           const dietObjects = await Promise.all(diets.map(dietName => Diet.findOrCreate({ where: { name: dietName } })));
// //           const dietArray = dietObjects.map(dietObject => dietObject[0]);
// //           await recipe.addDiets(dietArray);
// //         }
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     }
// //     // const recipes = await Recipe.findAll({ include: Diet });
// //     // return recipes;
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

// // console.log(apiData().then((dat) => console.log(dat)))

// // module.exports = savedApi





















// const Pagination = ({ recipesPerPage, totalRecipes, paginate }) => {
//     const pageNumbers = [];
  
//     for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
//       pageNumbers.push(i);
//     }
  
//     return (
//       <nav>
//         <ul className="pagination">
//           {pageNumbers.map((number) => (
//             <li key={number} className="page-item">
//               <a
//                 onClick={() => paginate(number)}
//                 href="#"
//                 className="page-link"
//               >
//                 {number}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     );
//   };
  
//   export default PagesCards;

