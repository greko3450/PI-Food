import React from "react";
import { NavLink } from "react-router-dom";
import landingPage from "./Landing.module.css"

class Landing extends React.Component {

  render() {
    return (
      <div className={landingPage.container}>
        <NavLink to={"/recipes"} rel="noopener noreferrer">
          <button className={landingPage.boton}>Home</button>
        </NavLink>
        <div className={landingPage.content}>
          <h1>*************PI food*************</h1>
          <p>"Hoy quiero presentarte un proyecto relacionado con la página web de Spoonacular, enfocado en la implementación de tecnología de PI. Spoonacular es una página web dedicada a la gastronomía que ofrece una amplia variedad de recetas de cocina, artículos relacionados con alimentos y bebidas, y herramientas útiles para planificar y organizar comidas. La página web cuenta con una gran base de datos de recetas, pero una de las dificultades que enfrenta es la selección y sugerencia de recetas personalizadas para cada usuario en particular.

El objetivo principal de este proyecto es mejorar la experiencia del usuario al buscar y seleccionar recetas personalizadas, utilizando tecnología de PI. Esto significa que la página web será capaz de analizar y comprender el lenguaje natural utilizado por los usuarios en sus búsquedas, y proporcionar resultados precisos y relevantes de acuerdo con sus preferencias y necesidades.

La implementación de la tecnología de PI en la página web de Spoonacular implica la utilización de algoritmos avanzados de procesamiento de lenguaje natural, que analizan y comprenden los patrones lingüísticos y semánticos de las búsquedas de los usuarios. De esta manera, la página web será capaz de proporcionar sugerencias precisas y personalizadas de recetas que satisfagan las necesidades y preferencias del usuario."</p>
        </div>
      </div>
    );
  }
}

export default Landing;