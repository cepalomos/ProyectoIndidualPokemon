import "../css/landingPage.css";

import React from 'react'
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className='contenedor'>
    <img src="https://fondosmil.com/fondo/12145.jpg" className="imagen" alt="pokemon"/>
     <Link to={'/home'}><button className="ingresar" ><span>Ingresar</span></button></Link>
    </div>
  )
}
