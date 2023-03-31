// import React from "react";
import CardRecipes from "./CardRecipes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { useEffect } from "react";
import { searchRecipeAll } from "../../redux/actions";


function CardsRecipes() {

  const postRecipe = useSelector((state) => state.createRecipes);
  const dispatch = useDispatch()

  console.log(postRecipe);
  useEffect(() => {
    dispatch(searchRecipeAll())
  }, [dispatch])


  return(
    <div>
      {
       postRecipe.map(created => {
          
          let {id, name, image} = created;
          return (

            <CardRecipes
            key={id}
            name={name}
            image={image}
            // diets={diets?.map(diet => diet.name)}
            />
          )
        }
          )
      } 
    </div>
  )
}

export default CardsRecipes;

