import React from "react";
import { NavLink } from "react-router-dom";

import pages from "./Cards.module.css";

class Card extends React.Component{
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }

  render() {
    let {idRecipe, name, image, diets, healthScore} = this.props
    return(
      <div className={pages.dietsContainer}>
        
        <NavLink className={pages.pagesNav} to={`/recipes/${idRecipe}`}>
        <h1 className={pages.pagesTextTitulo}>{name}</h1>
        </NavLink>
        <img  src={image} alt={name} />
          <div className={pages.dietsSpan}>
          {diets?.map((diet, index) => (
            <span className={pages.dietss} key={index} >{diet}</span>
            ))}
          </div>
            <p className={pages.healthScore}>Health-scores:<br/>{healthScore}</p>  
           
      </div>
    )
  }
}
       
          
export default Card;
