import React, {useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchRecipe } from "../redux/actions";

import style from "./Nav.module.css"



  function SearchBar() {

    const navigate = useNavigate();
    //Maneja el estado global
     const dispatch = useDispatch()
 
     
     const error = useSelector(state => state.error);
     
     const [searchName, setSearchName] = useState("")
 
     
     let onChange = () => {
      dispatch(searchRecipe(searchName))
      navigate('/recipes/searchRecipe?name=' + searchName);
  
    }
  
     let handleSearch = (event) => {
      setSearchName(event.target.value)
     }
  
     return(
       <div className={style.imgStyle}>
       <div className={style.divStyle}>
         
         <input  className={style.searchStyle}  type="text"  value={searchName} placeholder="end recipe" onChange={handleSearch}/>
         <button onClick={onChange}>ingresar</button>
         {error && <h3>{error}</h3>}
     
       </div>
 
 </div>
 
   )  
   }
     
 
 export default SearchBar;
   
    
 
  
    