// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Error() {
//   const navigate = useNavigate();
//   const error = useSelector(state => state.error);

//   useEffect(() => {
//     if (error && error.status === 404) {
//       navigate(`/recipes/searchRecipe?name=`);
//     }
//   }, [error, navigate])

// return(
//     <div>
//        <h1>Error 404 not found</h1> 

//         </div>
// )
// }
// export default Error;