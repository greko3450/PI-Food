
import React from 'react';
import './App.css';
import Landing from "./components/pages/Landing.jsx";

import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Detail from './components/pages/Detail';

import {Routes, Route} from "react-router-dom";

import PagesCards from './components/pages/pagination/PagesCards.jsx';

import Form from './components/form/Form';




function App() {
  
    

  return (
    <div className='App' style={{ padding: '25px'}}>

      <Routes>
        
        <Route path='/' element={<Landing/>}/>
        <Route  path='/recipes' element={
          <>
          <Nav/>
          <PagesCards/> 
         </>
        }/>
        <Route path='/recipes/searchRecipe' element={<Cards/>}/>
        <Route path='/recipes/:id' element={<Detail/>}/>
        <Route path="/recipes/form" element={<Form/>}/>
        </Routes>
    </div>
  )
}

export default App;
          


