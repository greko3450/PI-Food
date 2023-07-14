
import React from 'react';
import './App.css';
import Landing from "./components/pages/Landing.jsx";
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Detail from './components/pages/Detail.jsx';
import Footer from './components/Footer.jsx';
import {Routes, Route} from "react-router-dom";
import Formulario from './components/form/Formulario.jsx';

function App() {
  return (
    <div className='App' style={{ padding: '25px'}}>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route  path='/recipes' element={
          <>
            <Nav/>
            <Cards/> 
          </>
        }/>
        <Route path='/recipes/:id' element={<><Nav/><Detail/><Footer/></>}/>
        <Route path="/recipes/form" element={<><Nav/><Formulario/><Footer/></>}/>
      </Routes>
    </div>
    )
  }

export default App;
  
    

            

        
        
        
        

          


