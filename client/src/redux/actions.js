import axios from "axios"
export const SEARCH_RECIPE_ALL = "SEARCH_RECIPE_ALL";
export const FILTERED_DIETS = "FILTERED_DIETS";
export const SORTED_RECIPE = "SORTED_RECIPE";
export const CREATED_API = "CREATED_API";
// ***********************************************************
export const SEARCH_RECIPE_NAME = "SEARCH_RECIPE_NAME";
export const SEARCH_RECIPE_ERROR = "SEARCH_RECIPE_ERROR";
//************************************************************ */
export const CREATE_RECIPE = "CREATE_RECIPE";
export const CREATE_RECIPE_ERROR = "CREATE_RECIPE_ERROR";
//**************************************************** */
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
     
export const sortedRecipe = (order) => {
  return {
    type: SORTED_RECIPE,
    payload: order
    
  }
}

export const filteredDiets = (diets) => {
  return {
    type: FILTERED_DIETS,
    payload: diets
  }
}

export const createdApi = (created) => {
  return {
    type: CREATED_API,
    payload: created
  }
}

// export const searchRecipe = (searchName) => {
//   return (dispatch) => {
//     try {
//        if(searchName) {
//           dispatch({
//             type: SEARCH_RECIPE_NAME,
//             payload: searchName
//           });
//         } else {
//           dispatch({
//             type: SEARCH_RECIPE_ERROR,
//             payload: "si hay"
//           });
//         }
//     } catch (error) {
//       dispatch({
//         type: SEARCH_RECIPE_ERROR,
//         payload: error.message
//       });
//       console.log(error.message)
//     }
//   };
// };
       
        
     
        
      

// export const searchRecipe = (searchName) => {
//   return (dispatch) => {
//     if (searchName) {
//       // Realizar la solicitud a la API para buscar recetas por nombre
//       // y luego llamar a la acción SEARCH_RECIPE_NAME con los datos obtenidos
//       // por ejemplo:
//       axios.get(`http://localhost:3001/recipes?name=${searchName}`)
//         .then((response) => {
//           const data = response.data;
//           dispatch({
//             type: SEARCH_RECIPE_NAME,
//             payload: data
//           });
//         })
//         .catch((error) => {
//           dispatch({
//             type: SEARCH_RECIPE_ERROR,
//             payload: error.message 
//           });
//         });
//     } else {
//       dispatch({
//         type: SEARCH_RECIPE_ERROR,
//         payload: "si hay"
//       });
//     }
//   };
// };
// export const searchRecipe = (searchName) => {
//   return async (dispatch) => {
//     try {
//       if (searchName) {
//         // Realizar la solicitud a la API para buscar recetas por nombre
//         // y luego llamar a la acción SEARCH_RECIPE_NAME con los datos obtenidos
//         // por ejemplo:
//         const response = await fetch(`http://localhost:3001/recipes?name=${searchName}`);
//         if (!response.ok) {
//           throw new Error('Error en la solicitud');
//         }
//         const data = await response.json();
//         dispatch({
//           type: SEARCH_RECIPE_NAME,
//           payload: data
//         });
//         // dispatch({
//         //   type: SEARCH_RECIPE_ERROR,
//         //   payload: "si hay"
//         // });
//       } else {
//         dispatch({
//           type: SEARCH_RECIPE_ERROR,
//           payload: "no hay"
//         });
//       }
//     } catch (error) {
//       dispatch({
//         type: SEARCH_RECIPE_ERROR,
//         payload: error.message
//       });
//     }
//   };
// };

export const searchRecipe = (name) => {
  return async (dispatch) => {
    try {
      const url = name ? `http://localhost:3001/recipes?name=${name}` : '/recipes';
      const response = await fetch(url);
      // const response = await fetch(`http://localhost:3001/recipes?name=${name}`);
      const data = await response.json();
      
      if (data.length > 0) {
        dispatch({ type: SEARCH_RECIPE_NAME, payload: data });
        // dispatch({ type: SEARCH_RECIPE_ERROR, payload: "si hay" });
      } else {
        dispatch({ type: SEARCH_RECIPE_ERROR, payload: "no hay recetas" });
      }
    } catch (error) {
      dispatch({ type: SEARCH_RECIPE_ERROR, payload: "error" });
      console.log(error.message);
    }
  };
};


export const createRecipe = (form) => {
  return async (dispatch) => {
   try {
     const response = await axios.post('http://localhost:3001/recipes', form);
     const createdRecipe = await response.data
    //  console.log(response);
     if(createdRecipe.length) {
        dispatch({
          type: CREATE_RECIPE, 
          payload: createdRecipe
        });
      } else {
        dispatch({
          type:CREATE_RECIPE_ERROR, 
          payload: "receta creada"
        })
    }
  } catch (error) {
    dispatch({
      type:CREATE_RECIPE_ERROR, 
      payload: "receta no creada" 
      })
      console.log(error.message);
    }
  };
};

   
export const searchDiet = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3001/diets`);
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














