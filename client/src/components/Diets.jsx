
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchDiet } from "../redux/actions.js";

function Diets(props) {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const [selectedDiet, setSelectedDiet] = useState("");

  useEffect(() => {
    dispatch(searchDiet());
  }, [dispatch]);

  const handleSelectedDiet = (event) => {
    //actualiza el estado local 
    setSelectedDiet(event.target.value);
    //maneja el evento de la dieta seleccionada por el uasrio
    props.selectedDiet(event.target.value);
  }

  return (
    <div>
      <select value={selectedDiet} onChange={handleSelectedDiet}>
        <option value="">Seleccione una dieta</option>
        {diets.map((diet, index) => (
          <option key={index} value={diet}>
            {diet}
          </option>
        ))}
      </select>
      {/* {selectedDiet && <button>Ver recetas</button>} */}
    </div>
  );
}

export default Diets;
