import React from "react";
import CardRecipes from "./CardRecipes";
import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { createRecipe } from "../../redux/actions";


function CardsRecipe() {

  const postRecipe = useSelector((state) => state.postRecipe);
  


  return(
    <div>
      {
       postRecipe?.map(created => {
          
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

export default CardsRecipe;

