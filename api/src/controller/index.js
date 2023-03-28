const axios = require("axios")
const {Recipe, Diet} = require("../db.js")

require("dotenv").config()
const {API_KEY} = process.env

//  INICIAMOS EL LLAMADO A LA API

let apiData = async() => {
  
  
  try {

    const saveData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
    
    const data = saveData.data.results?.map(recipe => {

      return {
        id: recipe.id,
        name: recipe.title,
        summary: recipe.summary.replace(/<[^>]+>/g, ''),
        healthScore: recipe.healthScore,
        diets: recipe.diets,
        image: recipe.image,
        // steps: recipe.analyzedInstructions[0]?.steps?.map((e) => e.step??e.step).join()
        steps: recipe.analyzedInstructions[0]?.steps?.map((step) => {
          return `${step.number}   ${step.step} `
        })
      };
           
          
      })
        
        return data
      } catch (error) {
          console.log(error)
    }
  }
          
     
 



const savedApi = async () => {
  try {
    const data = await apiData();
    for (let i = 0; i < data.length; i++) {
      try {
        const { name, summary, healthScore, image, steps, diets } = data[i];
        const recipe = await Recipe.create({ name, summary, healthScore, image, steps });
        if (Array.isArray(diets)) { // si diets es un array 
          for (let j = 0; j < diets.length; j++) {
            const diet = await Diet.findOrCreate({ where: { name: diets[j] } });
            await recipe.addDiet(diet[0]);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    // const recipes = await Recipe.findAll({ include: Diet });
    // return recipes;
  } catch (error) {
    console.log(error);
  }
  
}

module.exports = savedApi

