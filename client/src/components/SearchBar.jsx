import React, {useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchRecipe } from "../redux/actions";
import style from "./Nav.module.css"



  function SearchBar() {
    //Maneja el estado global
     const dispatch = useDispatch()
 
     // se encraga de actualizar el estado de una accion
     const error = useSelector(state => state.error);
     
     const [searchName, setSearchName] = useState("")
 
     
     let onChange = () => {
      dispatch(searchRecipe(searchName))
  
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
   
    
 
  
    