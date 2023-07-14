//********************************** */
import React from "react";
import { connect } from "react-redux";
import Card from "./Card.jsx";
import { searchRecipeAll, sortedRecipe, filteredDiets,/* errorRecipe*/ } from "../redux/actions.js";
import Paginated from "./pages/pagination/Paginated";
import pages from "./Cards.module.css";
import Buttons from "./Buttons.jsx";
import jp from "../img/6774898.png"
import foot from "./Footer.module.css";
import {AiFillFacebook, AiFillLinkedin, AiFillGithub} from "react-icons/ai"
class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      recipesPerPage: 9,
      orderRecipe: "",
      selectedDiet: "",
    };
  }

  componentDidMount() {
    this.props.searchRecipeAll();
    // this.props.errorRecipe(); // Limpiar los errores al montar el componente
    // this.reset();
    
  }

  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleSorted = (event) => {
    this.setState({
      orderRecipe: event.target.value,
    });
    this.props.sortedRecipe(event.target.value);
  };

  handleSelectedDiet = (event) => {
    this.setState({ currentPage: 1, selectedDiet: event.target.value });
    this.props.filteredDiets(event.target.value);
  };

  reset = () => {
    this.props.searchRecipeAll();
    this.setState({
      currentPage: 1,
    })
    // this.props.errorRecipe(); // Limpiar los errores al hacer reset
  };

  render() {
    const { currentPage, recipesPerPage, selectedDiet, orderRecipe } = this.state;
    const { recipeAll, errors } = this.props;

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipeAll.slice(indexOfFirstRecipe, indexOfLastRecipe);

    return (
      <div >
        <Buttons
          handleSelectedDiet={this.handleSelectedDiet}
          selectedDiet={selectedDiet}
          handleSorted={this.handleSorted}
          orderRecipe={orderRecipe}
          reset={this.reset}
        />
        {errors ? (
          <div className={pages.errorStyle}>
            <p>*Mensaje de error: {errors}</p>
            <h3>  *sdsdddsad</h3>
            <img src={jp} alt="not cocina" />
          </div>
        ) : (
          <>
            <div className={pages.pagesCards}>
              {currentRecipes.map((recipe) => (
                <Card
                  key={recipe.id}
                  name={recipe.name}
                  image={recipe.image}
                  healthScore={recipe.healthScore}
                  diets={recipe.diets?.map((diet) => diet.name)}
                  idRecipe={recipe.id}
                />
              ))}
            </div>
            <Paginated
              recipesPerPage={recipesPerPage}
              totalRecipes={recipeAll.length}
              paginate={this.paginate}
            />
          </>
        )}
        <div className={foot.footers}>
          <ul>
            <li><AiFillFacebook/></li>
            <li><AiFillLinkedin/></li>
            <li><AiFillGithub/></li>
          </ul>
        </div>
      </div>
    );
  }
}
        
const mapStateToProps = (state) => {
  return {
    recipeAll: state.recipeAll,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchRecipeAll: () => dispatch(searchRecipeAll(null)),
    sortedRecipe: (order) => dispatch(sortedRecipe(order)),
    filteredDiets: (diets) => dispatch(filteredDiets(diets)),
    // searchRecipe: (name) => dispatch(searchRecipe(name)),
    // errorRecipe: (error) => dispatch(errorRecipe(error)) // Cambiar el parámetro a null
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
        
        
        
