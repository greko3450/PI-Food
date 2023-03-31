import React, {useState} from "react"
import { useDispatch } from "react-redux";
import { createRecipe } from "../../redux/actions";
import stilo from "./Form.module.css";
import { diets } from './diets.js';
function Form() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    summary: "",
    healthScore: 0,
    steps: [],
    image: "",
    diets: []
  });

  const [error, setError] = useState({
    name: ""
  })
  

  let errorValidate = () => {
    if (form.name === "" || !form.name.split("").every(char => isNaN(char))) {
      setError({...error, name:"El campo Name debe contener solamente letras."});
    } else {
      setError("");
    }
  }

  let handleOnchange = (event) => {
    if (event.target.name === "steps") {
      setForm({
        ...form,
        steps: [event.target.value]
      });
    } else if (event.target.name === "diets") {
      setForm({
        ...form,
        diets: [event.target.value]
      });
    } else {
      setForm({
        ...form,
        [event.target.name]: event.target.value
      });
    }
    errorValidate()
  };
  
  
  
  const handleSubmit = (event) => {
    event.preventDefault()
    errorValidate()
    if (!error.name) {
      dispatch(createRecipe(form))
    }
  }

  return(
    <div className={stilo.inputContainer}>
      <form className={stilo.formStyle} onSubmit={handleSubmit}>
        <label htmlFor="name">Name
        <input className={stilo.inputName} type="text" id="name" name="name" value={form.name} onChange={handleOnchange} />
        {/* {error.name !== "" ?  <p>{error.name}</p> : ""} */}
        {error.name && <p>{error.name}</p>}
        </label>
        <label  htmlFor="summary">Summary
        <input className={stilo.inputStyle} type="text" id="summary" name="summary" value={form.summary} onChange={handleOnchange} maxLength={225}/>
        </label>
        <label  htmlFor="healthScore">healthScore
        <input type="text" id="healthScore" name="healthScore" value={form.healthScore} onChange={handleOnchange} />
        </label>
        <label htmlFor="steps">steps
        <input className={stilo.inputStyle} type="text" id="steps" name="steps" value={form.steps} onChange={handleOnchange} maxLength={2500}/>
        </label>

        <label htmlFor="image">image
        <input type="url" id="image" name="image" value={form.image} onChange={handleOnchange}/>
        </label>

        <label htmlFor="diets">Diets</label>
        <select id="diets" name="diets" multiple onChange={handleOnchange}>
          {diets.map((diet, index) => (
            <option key={index} value={diet}>
              {diet}
            </option>
          ))}
        </select>
      
   
  
    <button className={form.buttonStyle} type="submit">Create Recipe</button>
  </form>
</div>

)
}

export default Form;




      
