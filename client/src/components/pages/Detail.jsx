import axios from "axios";
import React, {useState, useEffect} from "react";
import {NavLink, useParams} from "react-router-dom"
import detalle from "./Detail.module.css"


function Detail(){
  let {id} = useParams()
  let [detail, setDetail] = useState("")

   useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/${id}`);
        setDetail(response.data);
      } catch (error) {
        console.log("no hay detalles " + error);
      }
    }
    fetchData();
  }, [id])

  return(
    <div className={detalle.container}>

      <NavLink to="/recipes">
      <button className={detalle.boton}>Home</button>
      </NavLink>
      <div className={detalle.text}>
        <h3>Name: {detail.name}</h3>
        <p>Summary of the dish. {detail.summary}</p>
        <p>Healthy food level health score. {detail.healthScore}</p>
        <p>Step by Step. {detail.steps}</p>
        <p>Types of diet. {detail.diets?.map(diet => diet.name).join(" ")}</p>
      </div>
      <img className={detalle.image} src={detail.image} alt={detail.name} />
    </div>
  )
}

export default Detail;
      