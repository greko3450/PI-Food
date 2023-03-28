import React from "react";
import style from "./PagesCards.module.css";

class PagesCard extends React.Component{
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }
  

  render() {
    
    let {name, image, diets} = this.props
    return(
      <div className={style.pagesCard}>
        <p className={style.pagesTextTitulo}>{name}</p>
        <img className={style.imgs} src={image} alt={name} />
        <div className={style.pagesText}>
        {diets.map(diet=> (
        <h4 >{diet}</h4>
        ))}
      </div>
        
      </div>
    )
  }

}
     

export default PagesCard;