import React, {useState}from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchRecipe} from "../redux/actions";
import style from "./Nav.module.css"

  function SearchBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [searchName, setSearchName] = useState("")
    
    let handleSearch = () => {
      // e.preventDefault()
      dispatch(searchRecipe(searchName))
      navigate('/recipes?name=' + searchName + " recipe in the of");
     
    }
    
    let handleOnChange = (event) => {
      setSearchName(event.target.value)
    }
 
    const handleKeyPress = (event) => {
    if(event.key === "Enter") {
      // event.preventDefault()
      handleSearch()
      }
    }

    return(
      <div className={style.imgStyle}>
      <div className={style.divStyle}>
         <input  className={style.searchStyle} type="text"  value={searchName} placeholder="end recipe" onChange={handleOnChange} onKeyPress={handleKeyPress} required/>
         <button className={style.buttonStyle} onClick={handleSearch}>ingresar</button>
      </div>
      </div>
  )  
}
         
export default SearchBar;