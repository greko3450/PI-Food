import {SEARCH_RECIPE_ALL, FILTERED_DIETS, SEARCH_DIET, SORTED_RECIPE, /*CREATED_API*/ SEARCH_RECIPE_NAME, SEARCH_RECIPE_ERROR,  CREATE_RECIPE, CREATE_RECIPE_ERROR} from "./actions.js"

const initialState = {
  recipeAll: [],
  sortedName: [],
  recipes: [],
  errors: null,
  dietAll: [],
  createRecipes: [],
  errorCreate: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_RECIPE_ALL:
      return {
        ...state,
        recipeAll: action.payload,
        sortedName: action.payload, 
        
      }
    case FILTERED_DIETS:
      const recipeDate = [...state.sortedName];
      const genreByFiltered = action.payload === "" ? recipeDate  : recipeDate.filter(recipe => {
      return recipe.diets.some(e => e.name === action.payload)
      })
      return {
        ...state,
        recipeAll: genreByFiltered
      }
    case SORTED_RECIPE:
      const nameSorted = [...state.sortedName]
      const filteredSort = action.payload === "ASC" ? nameSorted.sort((a, b) => a.name.localeCompare(b.name)) :
      action.payload === "DESC" ? nameSorted.sort((a, b) => b.name.localeCompare(a.name)) : 
      action.payload === "RATINGASC" ? nameSorted.sort((a, b) => a.healthScore < b.healthScore ? -1 : a.healthScore > b.healthScore ? 1 : 0) : 
      action.payload === "RATINGDESC" ? nameSorted.sort((a, b) => a.healthScore > b.healthScore ? -1 : a.healthScore < b.healthScore ? 1 : 0) : nameSorted
      return {
        ...state,
        recipeAll: filteredSort
      }
    
      case SEARCH_RECIPE_NAME:
        return {
          ...state,
          recipeAll: action.payload,
          errors: null, // Limpiar los errores cuando se obtiene un resultado exitoso
        };
        case SEARCH_RECIPE_ERROR:
          return {
            ...state,
            errors: action.payload,
          recipeAll: [], // Limpiar las recetas cuando hay un error
        };
    case CREATE_RECIPE:
      return {
        ...state,
        createRecipes: [...state.createRecipes, action.payload]
      }
    case CREATE_RECIPE_ERROR:
      return {
        ...state,
        errorCreate: action.payload
      }
    case SEARCH_DIET:
      return {
        ...state,
        dietAll: action.payload 
      }   
      default: 
        return state
          
      }
    }
      
    export default reducer;
    
       



// import {
//   SEARCH_RECIPE_ALL,
//   FILTERED_DIETS,
//   SEARCH_DIET,
//   SORTED_RECIPE,
//   SEARCH_RECIPE_NAME,
//   SEARCH_RECIPE_ERROR,
//   CREATE_RECIPE,
//   CREATE_RECIPE_ERROR,
// } from "./actions.js";

// const initialState = {
//   recipeAll: [],
//   sortedName: [],
//   recipes: [],
//   errors: null,
//   dietAll: [],
//   createRecipes: [],
//   errorCreate: null,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SEARCH_RECIPE_ALL:
//       return {
//         ...state,
//         recipeAll: action.payload,
//         sortedName: action.payload,
//       };
//     case FILTERED_DIETS:
//       const recipeDate = [...state.sortedName];
//       const genreByFiltered =
//         action.payload === ""
//           ? recipeDate
//           : recipeDate.filter((recipe) => {
//               return recipe.diets.some((e) => e.name === action.payload);
//             });
//       return {
//         ...state,
//         recipeAll: genreByFiltered,
//       };
//     case SORTED_RECIPE:
//       const nameSorted = [...state.sortedName];
//       const filteredSort =
//         action.payload === "ASC"
//           ? nameSorted.sort((a, b) => a.name.localeCompare(b.name))
//           : action.payload === "DESC"
//           ? nameSorted.sort((a, b) => b.name.localeCompare(a.name))
//           : action.payload === "RATINGASC"
//           ? nameSorted.sort(
//               (a, b) => a.healthScore < b.healthScore ? -1 : a.healthScore > b.healthScore ? 1 : 0
//             )
//           : action.payload === "RATINGDESC"
//           ? nameSorted.sort(
//               (a, b) => a.healthScore > b.healthScore ? -1 : a.healthScore < b.healthScore ? 1 : 0
//             )
//           : nameSorted;
//       return {
//         ...state,
//         recipeAll: filteredSort,
//       };
//       //  case SEARCH_RECIPE_NAME:
//       // // const nuevo = [...state.sortedName];
//       // // const searchNames = action.payload === nuevo
//       // // })
//       // console.log(state.recipeAll); // Verificar los datos iniciales de las recetas
//       // console.log(action.payload); // Verificar el valor de búsqueda
//       // const searchName = [...state.sortedName];
//       // const searchFiltered = action.payload === "" ? searchName :  searchName.filter(recipe => {
//       //   console.log(recipe.name); // Verificar los nombres de las recetas
//       //   return recipe.name.includes(action.payload);
//       // });
//       // console.log(searchFiltered + "sads"); // Verificar el resultado del filtro
//       // return {
//       //   ...state,
//       //   // recipeAll: searchFiltered,
//       //   recipeAll: [...searchFiltered, ...action.payload],
//       //   errors: null,
//       // }
//     case SEARCH_RECIPE_NAME:
//       return {
//         ...state,
//         recipeAll: action.payload,
//         errors: null, // Limpiar los errores cuando se obtiene un resultado exitoso
//       };
//       case SEARCH_RECIPE_ERROR:
//         return {
//           ...state,
//           errors: action.payload,
//         recipeAll: [], // Limpiar las recetas cuando hay un error
//       };
//     case CREATE_RECIPE:
//       return {
//         ...state,
//         createRecipes: [...state.createRecipes, action.payload],
//       };
//     case CREATE_RECIPE_ERROR:
//       return {
//         ...state,
//         errorCreate: action.payload,
//       };
//     case SEARCH_DIET:
//       return {
//         ...state,
//         dietAll: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
      
        
      









