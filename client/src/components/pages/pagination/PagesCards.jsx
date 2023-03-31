
// import React from "react";
// import { connect } from "react-redux";
// import PagesCard from "./PagesCard";
// import { searchRecipeAll } from "../../../redux/actions";
// import Paginated from "./Paginated";

// // import Boton from "../../boton/Boton.jsx";
// import style from "./PagesCards.module.css"


// class PagesCards extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentPage: 1,
//       recipesPerPage: 9,
//       orderRecipe: [],
//     };
//   }

//   componentDidMount() {
//     this.props.searchRecipeAll();
//   }

//   paginate = (pageNumber) => {
//     this.setState({ currentPage: pageNumber });
//   };

//   // Método para ordenar de A a Z
//   sortAsc = () => {
//     const sortedRecipes = this.props.recipeAll.sort((a, b) => {
//       if (a.name < b.name) {
//         return -1;
//       }
//       if (a.name > b.name) {
//         return 1;
//       }
//       return 0;
//     });

//     this.setState({ orderRecipe: sortedRecipes });
//   };

//   // Método para ordenar de Z a A
//   sortDesc = () => {
//     const sortedRecipes = this.props.recipeAll.sort((a, b) => {
//       if (a.name > b.name) {
//         return -1;
//       }
//       if (a.name < b.name) {
//         return 1;
//       }
//       return 0;
//     });

//     this.setState({ orderRecipe: sortedRecipes });
//   };

//   render() {
//     // destructuracion de this.props
//     const { orderRecipe } = this.state;
//     const { recipeAll } = this.props;
   
//     // Verificamos si se ha ordenado el array de recetas
//     const recipes = orderRecipe.length > 0 ? orderRecipe : recipeAll;

//     // paginado
//     const { currentPage, recipesPerPage } = this.state;
//     const indexOfLastRecipe = currentPage * recipesPerPage;
//     const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
//     const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
//     const totalRecipes = recipes.length;

//     return (
//       <div className={style.pagesCards}>
        
        
        
//         {/* <Boton onClickAsc={this.sortAsc}  onClickDesc={this.sortDesc} className={}/> */}
        
//         <button className={style.botton} onClick={this.sortAsc}>Ordenar de a a z</button>
//         <button className={style.botton}  onClick={this.sortDesc}>Ordenar de z a a</button>
        

//         {/* Declarando una Card */}
//         {currentRecipes?.map((recipe) => {
//           const { id, name, image, diets } = recipe;
//           return (
//             <PagesCard
//               key={id}
//               name={name}
//               image={image}
//               diets={diets?.map((diet) => diet.name)}
              
//             />
//           );
//         })}

//         {/* Paginado enviado al componente Paginated */}
//         <Paginated
//           recipesPerPage={recipesPerPage}
//           totalRecipes={totalRecipes}
//           paginate={this.paginate}
//         />
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     recipeAll: state.recipeAll
//   }
// }


// const mapDispatchToProps = (dispatch) => {
//   return {
//     searchRecipeAll: () => dispatch(searchRecipeAll())
//   }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(PagesCards);


//**************************** */



import React from "react";
import { connect } from "react-redux";
import PagesCard from "./PagesCard";
import { searchRecipeAll } from "../../../redux/actions";
import Paginated from "./Paginated";
import Diets from "../../Diets.jsx";
import pages from "./PagesCards.module.css";

class PagesCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      recipesPerPage: 9,
      orderRecipe: "[]",
      selectedDiet: "",
    };
  }

  componentDidMount() {
    this.props.searchRecipeAll();
  }

  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  sortAsc = () => {
    const sortedRecipes = this.props.recipeAll.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    this.setState({ orderRecipe: sortedRecipes });
  };

  sortDesc = () => {
    const sortedRecipes = this.props.recipeAll.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });

    this.setState({ orderRecipe: sortedRecipes });
  };

  //Esta función se llama cuando se selecciona una dieta y actualiza el estado de selectedDiet
  handleSelectedDiet = (selectedDiet) => {
    this.setState({ selectedDiet });
  };
  
  // resetRecipes = () => {
  //   this.setState({
  //     // currentPage: 9,
  //     // recipesPerPage: 1,
  //     orderRecipe: [],
  //     selectedDiet: "",
  //   });
  // };
  // Luego, podemos usar este estado para filtrar las recetas en el método render():
  
  render() {
  const { currentPage, recipesPerPage, selectedDiet } = this.state;
  const { recipeAll } = this.props;
 
 //almacena todas las dietas selecionada por usuario, sino las encuentra devuelve todas las recetas
  const filteredRecipes = selectedDiet !== "" ? recipeAll.filter((recipe) =>
      recipe.diets.some((diet) => diet.name === selectedDiet)
    )
  : recipeAll;

// Logic for displaying current recipes
const indexOfLastRecipe = currentPage * recipesPerPage;
const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
const currentRecipes = filteredRecipes.slice(
  indexOfFirstRecipe,
  indexOfLastRecipe
);

return (
  <div className={pages.cards}>
    <Diets selectedDiet={this.handleSelectedDiet} />
    <div className={pages.sort}>
      <button onClick={this.sortAsc}>A-Z</button>
      <button onClick={this.sortDesc}>Z-A</button>
      {/* <button onClick={this.resetRecipes}>Resetear recetas</button> */}
    </div>


    <div className={pages.pagesCards}>
    {currentRecipes?.map((recipe) => {
  const { id, name, image, diets } = recipe;
  return (
    <PagesCard
      key={id}  // Agregar key única
      name={name}
      image={image}
      diets={diets?.map((diet) => diet.name)}
      idRecipe={id}
    />
  );
})}
    </div>



    <Paginated
      recipesPerPage={recipesPerPage}
      totalRecipes={filteredRecipes.length}
      paginate={this.paginate}
    />



  </div>
);
}
}
const mapStateToProps = (state) => {
  return {
    recipeAll: state.recipeAll
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    searchRecipeAll: () => dispatch(searchRecipeAll())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(PagesCards);

