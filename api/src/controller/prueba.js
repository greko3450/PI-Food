// import { createRecipe } from "../../../client/src/redux/actions";




recipeRouter.get("/id", async (req, res) => {
  const {id} = req.params;
  try {
    let test = id.split("").some(e => isNaN(e))
    if(test) {
      let detail = await Recipe.findOne({
        where:{
          id: id,
        }
        include: Diet
      })
    }
  } catch (error) {
    
  }
})



// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { searchRecipe } from "../redux/actions";
// // import Error from "./Error";
// import style from "./Nav.module.css"

// function SearchBar() {

//   const navigate = useNavigate();
//   const dispatch = useDispatch()
//   const error = useSelector(state => state.error);
//   const [searchName, setSearchName] = useState("")

  
  

//   let onChange = () => {
//     dispatch(searchRecipe(searchName))
//     navigate(`/recipes/searchRecipe?name=${searchName}`);
//   }

//   let handleSearch = (event) => {
//     setSearchName(event.target.value)
//   }

//   return (
//     <div className={style.imgStyle}>
//       <div className={style.divStyle}>
//         <input  className={style.searchStyle}  type="text"  value={searchName} placeholder="end recipe" onChange={handleSearch}/>
//         <button onClick={onChange}>ingresar</button>
//         {error && <h3>{error.message}</h3>}
//       </div>
//     </div>
//   )  
// }

// export default SearchBar;
     






















// const savedApi = async () => {
//   try {
//     const data = await apiData();
//     for(let i = 0; i < data.length; i++) {
//       const {name, summary, healthScore, steps, image, diets} = data[i]
//       const recipe = await Recipe.create({name, summary, healthScore, steps, image})
//       if(Array.isArray(diets)) {
//         for(let j = 0; j < diets.length; i++) {
//           const diet = await Diet.findOrCreate({where: {name: diets[i]}})
//           await recipe.addDiet(diet[0]);
//         }
//       } 
//     }
//   } catch (error) {
    
//   }  
// }

