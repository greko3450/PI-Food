import React, { useState, useEffect }  from "react";
import {useSelector, useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import {searchDiet} from "../redux/actions.js"

function Diets() {
  
  // const {diet} = useParams()
  
  let dispatch = useDispatch()
  let diets = useSelector((state) => state.diets)
  let [selectDiet, setSelecDiet] = useState("")


  useEffect(() => {

    dispatch(searchDiet())
  }, [dispatch])
    
  
  let onDiet = (event) => {
    setSelecDiet(event.target.value)

  }
    
  return(
    <div>
      {/* <button value={selectDiet} onClick={onDiet}>ingresar</button> */}
      
      <select value={selectDiet} onChange={onDiet}>
        <option value="">Seleccione una dieta</option>
        {diets.map((diet, index) => (
          <option key={index} value={diet}>
            {diet}
          </option>
        ))}
      </select>
      {selectDiet && (
        <Link to={`/recipes/recipe/${selectDiet}`}>
          <button>Ver recetas</button>
        </Link>
      )}
      
    
   
    </div>
  )
}

export default Diets
    


  








