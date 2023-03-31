import React from "react";
import { NavLink } from "react-router-dom";

import pages from "./PagesCards.module.css";

class PagesCard extends React.Component{
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }

  render() {
    let {idRecipe, name, image, diets} = this.props
    return(
      <div className={pages.pagesCard}>
        <NavLink className={pages.pagesNav} to={`/recipes/${idRecipe}`}>
        <p className={pages.pagesTextTitulo}>{name}</p>
        </NavLink>
        <img className={pages.imgs} src={image} alt={name} />
        <div className={pages.dietsContainer}>
          {diets.map((diet, index) => (
            <span key={index} className={pages.diet}>{diet}</span>
          ))}
        </div>
      </div>
    )
  }
}

export default PagesCard;
