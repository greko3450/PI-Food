import React from "react";
import { NavLink} from "react-router-dom";
import style from "./Cards.module.css";


function Card(props) {
  
  
  let {image, name, idRecipe, diet} = props;
  return(
    <div className={style.cardHeader}>
      <button>x</button>
      <br />
      <NavLink to={`/recipes/${idRecipe}`}>
        <img className={style.cardImg}  src={image} alt={name} />
      </NavLink>
      
        <h2 className={style.text}>{name}</h2>
      
      {/* <h2 className={style.text}>{diet[0]}</h2> */}
     {
      diet.map((na, index) => (
        
         <h2 key={index}>{na}</h2>
        
      ))
     }
      
    </div>
  )
}

export default Card;