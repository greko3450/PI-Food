import axios from "axios";
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"


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


  //  let {recipe} = this.stateclassName={{style: color: "red}}
    return(
      <div>
         <h3>Name: {detail.name}</h3>
         <h3>Summary of the dish. {detail.summary}</h3>
         <h3>Healthy food level health score. {detail.healthScore}</h3>
         <h3 >Step by Step. {detail.steps}</h3>
         <img src={detail.image} alt={detail.name} />
        <h3>Types of diet. {detail.diets?.map(diet => diet.name).join(" ")}</h3>
        
      </div>
    )
  
}

export default Detail;