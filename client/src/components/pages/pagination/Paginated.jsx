
import React from "react";
import { Link } from "react-router-dom";
import style from "./Paginated.module.css"
function Paginated({recipesPerPage, totalRecipes, paginate}) {

  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return(
    <div className={style.pagination}>
    <ul className={style.listBoton}>
      {pageNumbers.map((number) => (
        <li  key={number} >
          <Link
            onClick={() => paginate(number)}
            to="#"
            className="page-link"
          >
            <button className={style.pageBoton}>{number} </button>
          </Link>
        </li>
      ))}
    </ul>

  </div>
  )    
}

export default Paginated;





















