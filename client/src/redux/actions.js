import axios from "axios"
export const SEARCH_RECIPE_ALL = "SEARCH_RECIPE_ALL";
// ***********************************************************
export const SEARCH_RECIPE_NAME = "SEARCH_RECIPE_NAME";
export const SEARCH_RECIPE_ERROR = "SEARCH_RECIPE_ERROR";
//************************************************************ */
export const CREATE_RECIPE = "CREATE_RECIPE"
export const SEARCH_DIET = "SEARCH_DIET";
//*************************************************** */




export const searchRecipeAll= () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3001/recipes`);
      const recipes = await response.json();
      dispatch({
        type: SEARCH_RECIPE_ALL,
        payload: recipes 
      });
    } catch (error) {
      console.log(error);
    }
  };
};
     

export const searchRecipe = (name) => {
  return async (dispatch) => {
  const url = name ? `http://localhost:3001/recipes?name=${name}` : '/recipes';
    const response = await fetch(url);
    const data = await response.json();
    
        if(data.length > 0) {
          dispatch({type: SEARCH_RECIPE_NAME, payload: data})
          dispatch({type: SEARCH_RECIPE_ERROR, payload: "si hay "}) 
        } else {
         dispatch({type: SEARCH_RECIPE_ERROR , payload: "no hay recetas"})
        }
      
  }
}


export const createRecipe = (recipe) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/recipes', recipe);
      dispatch({
        type: CREATE_RECIPE,
        payload: response.data
      });
      
    } catch (error) {
      console.log(error);
    }
  };
};

// export const newcreateRecipe = () => {
//   return async (dispatch, getState) => {
//     try {
//       const response = await axios.get('http://localhost:3001/recipes');
//       const currentUser = getState().currentUser; // obtener información del usuario actual del estado global
//       const createdRecipes = response.data.filter(recipe => recipe.userId === currentUser.id); // filtrar las recetas creadas por el usuario actual
//       dispatch({
//         type: NEW_CREATE_RECIPE,
//         payload: createdRecipes
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

   
export const searchDiet = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3001/diets/`);
      const diet = await response.json();
      dispatch({
        type: SEARCH_DIET,
        payload: diet
      });
    } catch (error) {
      console.log(error);
    }
  };
};
      





// const searchRecipeAll













