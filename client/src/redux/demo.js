// const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

// const mostrarContenido = (opcion) => {
//   setOpcionSeleccionada(opcion);
// };
// const mostrarContenido = (event) => {
//   const opcion = event.target.dataset.opcion;
//   setOpcionSeleccionada(opcion);
// };


// <select onChange={(e) => mostrarContenido(e.target.value)}>
//   <option value="">Selecciona una opción</option>
//   <option value="Opcion 1">Opción 1</option>
//   <option value="Opcion 2">Opción 2</option>
//   <option value="Opcion 3">Opción 3</option>
// </select> 

// {opcionSeleccionada === 'Opcion 1' && <p>Este es el contenido de la opción 1</p>}
// {opcionSeleccionada === 'Opcion 2' && <p>Este es el contenido de la opción 2</p>}
// {opcionSeleccionada === 'Opcion 3' && <p>Este es el contenido de la opción 3</p>}

// {/* <button onClick={() => mostrarContenido('Opcion 1')}>Mostrar contenido 1</button>
//       <button onClick={() => mostrarContenido('Opcion 2')}>Mostrar contenido 2</button>
//       <button onClick={() => mostrarContenido('Opcion 3')}>Mostrar contenido 3</button>
      
//       {opcionSeleccionada === 'Opcion 1' && <p>Este es el contenido de la opción 1</p>}
//       {opcionSeleccionada === 'Opcion 2' && <p>Este es el contenido de la opción 2</p>}
//       {opcionSeleccionada === 'Opcion 3' && <p>Este es el contenido de la opción 3</p>}
//      */}







//      import React, { useState } from 'react';

// function MyForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name} onChange={handleChange} />
//       </label>
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const recipe = {
//     name,
//     summary,
//     healthScore,
//     steps,
//     image,
//     diets,
//   };
//   dispatch(addRecipe(recipe));
  
// };



// /********************************** */





// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createRecipe } from "../../redux/actions";
// import style from "./Form.module.css";

// function Form() {
//   const dispatch = useDispatch();

//   const [form, setForm] = useState({
//     name: "",
//     summary: "",
//     healthScore: "",
//     steps: "",
//     image: "",
//     diets: []
//   });

//   const [errors, setErrors] = useState({});

//   const handleOnChange = (event) => {
//     setForm({
//       ...form,
//       [event.target.name]: event.target.value
//     });
//     setErrors({
//       ...errors,
//       [event.target.name]: ""
//     });
//   };

//   const validateForm = () => {
//     let valid = true;
//     const newErrors = {};

//     if (form.name === "") {
//       newErrors.name = "Name is required";
//       valid = false;
//     }

//     if (form.summary === "") {
//       newErrors.summary = "Summary is required";
//       valid = false;
//     }

//     if (form.healthScore === "") {
//       newErrors.healthScore = "Health Score is required";
//       valid = false;
//     } else if (isNaN(form.healthScore) || parseInt(form.healthScore) < 0 || parseInt(form.healthScore) > 100) {
//       newErrors.healthScore = "Health Score must be a number between 0 and 100";
//       valid = false;
//     }

//     if (form.steps === "") {
//       newErrors.steps = "Steps are required";
//       valid = false;
//     }

//     if (form.image === "") {
//       newErrors.image = "Image is required";
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (validateForm()) {
//       dispatch(createRecipe(form));
//       setForm({
//         name: "",
//         summary: "",
//         healthScore: "",
//         steps: "",
//         image: "",
//         diets: []
//       });
//     }
//   };

//   return (
//     <div className={style.inputContainer}>
//       <form className={style.formStyle} onSubmit={handleSubmit}>
//         <label htmlFor="name">
//           Name
//           <input type="text" id="name" name="name" value={form.name} onChange={handleOnChange} />
//           {errors.name && <span className={style.error}>{errors.name}</span>}
//         </label>

//         <label htmlFor="summary">
//           Summary
//           <input type="text" id="summary" name="summary" value={form.summary} onChange={handleOnChange} maxLength={225} />
//           {errors.summary && <span className={style.error}>{errors.summary}</span>}
//         </label>

//         <label htmlFor="healthScore">
//           Health Score
//           <input type="text" id="healthScore" name="healthScore" value={form.healthScore} onChange={handleOnChange} />
//           {errors.healthScore && <span className={style.error}>{errors.healthScore}</span>}
//         </label>

//         <label htmlFor="steps">
//           Steps
//           <textarea id="steps" name="steps" value={form.steps} onChange={handleOnChange} maxLength={2500} />
//           {errors.steps && <span className={style.error}>{errors.steps}</span>}
//         </label>

//         <label htmlFor="image">
//          image
//         <input type="text" id="image" name="image" value={form.image} onChange={handleOnChange} />
// {errors.image && <span className={style.error}>{errors.image}</span>}
// </label> 
// <label htmlFor="diets">
//       Diets
//       <select multiple id="diets" name="diets" value={form.diets} onChange={handleOnChange}>
//         <option value="gluten free">Gluten Free</option>
//         <option value="ketogenic">Ketogenic</option>
//         <option value="vegetarian">Vegetarian</option>
//         <option value="lacto vegetarian">Lacto Vegetarian</option>
//         <option value="ovo vegetarian">Ovo Vegetarian</option>
//         <option value="vegan">Vegan</option>
//         <option value="pescatarian">Pescatarian</option>
//         <option value="paleolithic">Paleolithic</option>
//         <option value="primal">Primal</option>
//         <option value="whole30">Whole30</option>
//       </select>
//     </label>

//     <button type="submit">Create Recipe</button>
//   </form>
// </div>
// );
// }

// export default Form;



