import {SEARCH_RECIPE_ALL, SEARCH_RECIPE_NAME, SEARCH_RECIPE_ERROR, SEARCH_DIET, CREATE_RECIPE} from "./actions.js"


const initialState = {
  recipeAll: [],
  recipes: [],
  error: null,
  diets: [],
  // postRecipe: [],
  createRecipes: [],
  
}

 const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_RECIPE_ALL:
      return {
        ...state,
        recipeAll: action.payload,
        // recipes: action.payload 
      }
    case SEARCH_RECIPE_NAME:
      return {
        ...state,
        recipes: action.payload
      }
    case SEARCH_RECIPE_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case CREATE_RECIPE:
      return {
        ...state,
        // postRecipe: [...state.postRecipe, action.payload],
        createRecipes: [...state.createRecipes, action.payload]
      }
    case SEARCH_DIET:
      return {
        ...state,
        diets: action.payload 
      }   
    // case NEW_CREATE_RECIPE:
    //   return {
    //     ...state,
    //     createRecipes:  action.payload

    //   }  
       
    default: 
      return state
        
    }
  }
    
     export default reducer;

      
        
      
  