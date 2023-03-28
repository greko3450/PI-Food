import React from "react";
import { useSelector} from "react-redux";
import Card from "./Card.jsx";
import style from "./Cards.module.css"



function Cards() {
  let recipes = useSelector((state) => state.recipes)

  
  // console.log(recipes);
  return(
    <div className={style.cardsStyle}>
      {
        recipes?.map(recip => (
      //  recip.id ? (   
          <Card
            key={recip?.id}
            name={recip?.name}
            image={recip?.image}
            diet={recip.diets?.map(diet => diet.name)}
            idRecipe={recip.id}
            
            // id={recip.id}//detail por id para el component Detail
          />
          // ) : null
          ))
        }
       
    </div>
  )
}

export default Cards;
    
  
     