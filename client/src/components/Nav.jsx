import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css"

import SearchBar from "./SearchBar";
function Nav() {

  return(
    <nav >
      
      <SearchBar/>
      <NavLink className={style.navLinkStyle} to="/">back</NavLink>
      <NavLink className={style.navLinkStyle} to="/recipes/form">Created recipe</NavLink>
      <NavLink className={style.navLinkStyle} to="/">Landing</NavLink>
     
      
      
    </nav>
  )
    
  
}

export default Nav;
  
  

 
  
 


