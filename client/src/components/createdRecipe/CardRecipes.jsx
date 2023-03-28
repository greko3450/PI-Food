import React from "react";

function CardRecipes(props) {
  let {name, image} = props
  return(
    <div>
     <h3>{name}</h3>
     <img src={image} alt={name} />
     {/* <h3>{diets}</h3> */}
    </div>
  )
}

export default CardRecipes;