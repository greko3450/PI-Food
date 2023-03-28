
import React from 'react';
import './App.css';
import Landing from "./components/pages/Landing.jsx";
// import Home from './components/Home.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Detail from './components/pages/Detail';
// import Diets from './components/Diets.jsx';
import {Routes, Route} from "react-router-dom";
import PagesCards from './components/pages/pagination/PagesCards';
import Diets from './components/Diets';
import Form from './components/form/Form';
import CardsRecipes from './components/createdrecipe/CardsRecipes.jsx';



function App() {
  
    

  return (
    <div className='App' style={{ padding: '25px'}}>

      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route  path='/recipes' element={
          <>
          <Nav />
          <Diets/>
          <PagesCards/> 
          
          {/* <Ordered/> */}
          <Cards/>
         </>
        }/>
          
       
          {/* <Route path='/recipes/recipe' element={
         <>
           <Nav />
          <Cards/>
        </>
          }/> */}
        <Route path='/recipes/:id' element={<Detail/>}/>
        <Route path="/recipes/form" element={<Form/>}/>
        <Route path='/recipes/createdRecipes' element={<CardsRecipes/>}/>
       
        
        </Routes>
        
    </div>
  )
}

export default App;


