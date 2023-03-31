import React from "react";
import { NavLink} from "react-router-dom";
import style from "./Cards.module.css";


function Card(props) {
  
  
  let {image, name, idRecipe, diet} = props;
  return(
    <div className={style.cardHeader}>
      <button>x</button>
      <br />
        <h2 className={style.pagesTextTitulo}>{name}</h2>
      <NavLink to={`/recipes/${idRecipe}`}>
        <img className={style.cardImg}  src={image} alt={name} />
      </NavLink>
      
      
     <div className={style.dietContainer}>
     {
      diet.map((na, index) => (
        
         <h2 className={style.diet}  key={index}>{na}</h2>
        
      ))
     
     }
     </div>  
    </div>
  )
}

export default Card;