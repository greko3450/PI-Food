
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchDiet } from "../redux/actions.js";
import boton from "./Buttons.module.css";
function Buttons(props) {
  const {handleSelectedDiet, selectedDiet, orderRecipe, handleSorted, reset} = props;
  const dispatch = useDispatch();
  const dietAll = useSelector((state) => state.dietAll);


  useEffect(() => {
    dispatch(searchDiet());
  }, [dispatch]);

 

  return (
    <div className={boton.container}>
      <label htmlFor="diets">By diets:</label>
      <select id="diets" value={selectedDiet} onChange={handleSelectedDiet}>
        <option value="">All</option>
        {dietAll?.map((diet, index) => (
             <option key={index} value={diet}>
            {diet}
          </option> 
        ))}
      </select>
      

      <label htmlFor="ordered">ordered:</label>
      <select id="ordered" value={orderRecipe} onChange={handleSorted} >
        <option value="">All</option>
        <option value={"ASC"}>Asc</option>
        <option value={"DESC"}>Desc</option>
        <option value={"RATINGASC"}>rating-asc</option>
        <option value={"RATINGDESC"}>rating-desc</option>
      </select>
      <button onClick={reset} >reset</button>
    </div>
    
            
            
          
  );
}

export default Buttons;
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { searchDiet } from "../redux/actions.js";
// import boton from "./Buttons.module.css";

// function Buttons(props) {
//   const {
//     handleSelectedDiet,
//     selectedDiet,
//     orderRecipe,
//     handleSorted,
//     reset,
//   } = props;
//   const dispatch = useDispatch();
//   const dietAll = useSelector((state) => state.dietAll);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     dispatch(searchDiet());
//   }, [dispatch]);

//   const handleBurgerMenuClick = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // const closeBurgerMenu = () => {
//   //   setIsMenuOpen(false);
//   // };

//   const screenWidth = window.innerWidth;
//   const isMobile = screenWidth <= 768;

//   return (
//     <div className={boton.container}>
//       {!isMobile && (
//         <>
//           <label htmlFor="diets">By diets:</label>
//           <select id="diets" value={selectedDiet} onChange={handleSelectedDiet}>
//             <option value="">All</option>
//             {dietAll?.map((diet, index) => (
//               <option key={index} value={diet}>
//                 {diet}
//               </option>
//             ))}
//           </select>
//         </>
//       )}

//       {!isMobile && (
//         <>
//           <label htmlFor="ordered">ordered:</label>
//           <select id="ordered" value={orderRecipe} onChange={handleSorted}>
//             <option value="">All</option>
//             <option value={"ASC"}>Asc</option>
//             <option value={"DESC"}>Desc</option>
//             <option value={"RATINGASC"}>rating-asc</option>
//             <option value={"RATINGDESC"}>rating-desc</option>
//           </select>
//         </>
//       )}

//       {!isMobile && (
//         <button onClick={reset}>reset</button>
//       )}

//       {isMobile && (
//         <div className={boton.burgerMenu}>
//           <button className={boton.burgerMenuButton} onClick={handleBurgerMenuClick}>
//             Menu
//           </button>
//           {isMenuOpen && (
//             <div className={boton.burgerMenuContent}>
//               <label htmlFor="diets">By diets:</label>
//               <select id="diets" value={selectedDiet} onChange={handleSelectedDiet}>
//                 <option value="">All</option>
//                 {dietAll?.map((diet, index) => (
//                   <option key={index} value={diet}>
//                     {diet}
//                   </option>
//                 ))}
//               </select>

//               <label htmlFor="ordered">ordered:</label>
//               <select id="ordered" value={orderRecipe} onChange={handleSorted}>
//                 <option value="">All</option>
//                 <option value={"ASC"}>Asc</option>
//                 <option value={"DESC"}>Desc</option>
//                 <option value={"RATINGASC"}>rating-asc</option>
//                 <option value={"RATINGDESC"}>rating-desc</option>
//               </select>

//               <button onClick={reset}>reset</button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Buttons;
