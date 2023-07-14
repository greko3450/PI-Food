   
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector,  } from "react-redux";
import {createRecipe, searchDiet} from "../../redux/actions.js";
import styleForm from "./Formulario.module.css";


function Form() {
  const dispatch = useDispatch()
  const errorCreate = useSelector(state => state.errorCreate)
  const dietAll = useSelector(state => state.dietAll)

  const [form, setForm] = useState({
    name: "",
    summary: "",
    healthScore: "",
    steps: [],
    image: "",
    diets: []
  })

  const [errors, setErrors] = useState({
    name: "",
    summary: "",
    healthScore: "",
    steps: [],
    image: "",
    diets: []
  })

  useEffect(() => {
    dispatch(searchDiet())
  }, [dispatch])
  
const errorValidate = () => {
  let newErrors = {};
  
   if (!/^[a-zA-Z ]+$/.test(form.name)) {
    newErrors.name = "No se permiten números en el nombre";
  } else {
    newErrors.name = "";
  }

  if (!form.summary) {
    newErrors.summary = "Se requiere un resumen para la receta";
  } else {
    newErrors.summary = "";
  }

  if (!form.healthScore) {
    newErrors.healthScore = "Se requiere un puntaje de salud para la receta";
  } else {
    newErrors.healthScore = "";
  }

  if (!form.image) {
    newErrors.image = "Se requiere una imagen para la receta";
  } else {
    newErrors.image = "";
  }

  setErrors({...errors, ...newErrors})
}

let handleOnchange = (event) => {
  event.target.name === "steps" 
  ? setForm({
    ...form,
    steps: [event.target.value]
  }) :
  event.target.name === "diets" 
  ? setForm({
    ...form,
    diets: [...form.diets, event.target.value]
  })
  : setForm({
    ...form,
    [event.target.name]: event.target.value
  })
  errorValidate()
}   

let handleSubmit = (e) => {
   e.preventDefault()
   dispatch(createRecipe(form))
   resetForm()
 }

 let resetForm = () => {
   setForm({
    name: "",
    summary: "",
    healthScore: "",
    steps: [],
    image: "",
    diets: []
   })
 }

  return(
    <div className={styleForm.formContainer}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleOnchange} placeholder="ingrese name" />
        {errors.name && <p>{errors.name}</p>}
        <label htmlFor="summary">Summary:</label>
        <textarea type="text" id="summary" name="summary" value={form.summary} onChange={handleOnchange} placeholder="ingrese summary" />
        <label htmlFor="healthScore">healthScore:</label>
        <input type="number" id="healthScore" name="healthScore" value={form.healthScore !== "null" ? form.healthScore : "0" } onChange={handleOnchange} placeholder="ingrese numero" />
        {errors.healthScore && <p>{errors.healthScore}</p>}
        <label htmlFor="steps">Steps:</label>
        <input type="text" id="steps" name="steps" value={form.steps} onChange={handleOnchange} placeholder="ingrese el paso a paso" />
        <label htmlFor="image">Image:</label>
        <input type="url" id="image" name="image" value={form.image} onChange={handleOnchange} placeholder="ingrese url" />
        <label htmlFor="diets">Diets:</label>
          <select  id="diets" name="diets" onChange={handleOnchange}>
            <option value="">Selected diets:</option>
            {
              dietAll?.map((diet, index) => (
                <option key={index} value={diet} >
                  {diet}
                </option>
              ))
            }
          </select>
        <button type="submit">enviar</button>
          <h5>{form.diets?.map((dieta) => dieta + " , " )}</h5>
        {errorCreate !== "" ? <p>{errorCreate}</p> : "" }
      </form>
    </div>
  )
}
         

export default Form;
