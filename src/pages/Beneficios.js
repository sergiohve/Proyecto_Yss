import React from 'react'

import Sidebar from '../components/Sidebar'
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contenido from '../components/Contenido';
import Recurso362 from '../assets/projects_images/Recurso 362.png'
import Recurso491 from '../assets/projects_images/Recurso 491.png'
import Recurso492 from '../assets/projects_images/Recurso 492.png'
import Recurso493 from '../assets/projects_images/Recurso 493.png'
import Recurso494 from '../assets/projects_images/Recurso 494.png'
import Recurso495 from '../assets/projects_images/Recurso 495.png'
import Recurso496 from '../assets/projects_images/Recurso 496.png'



 const img=<img src={Recurso362} alt="avatar" className="imgTitulo" />
 const img1=<div><Link to="/bienestar"><img src={Recurso491} alt="avatar" className="img1" /><img src={Recurso496} alt="avatar" className="ben1" /></Link></div>
 const img2=<div><Link to="/"><img src={Recurso492} alt="avatar" className="img2" /><img src={Recurso495} alt="avatar" className="ben2" /></Link></div>
 const img3=<div><Link to="/"><img src={Recurso493} alt="avatar" className="img3" /><img src={Recurso494} alt="avatar" className="ben3" /></Link></div>
 
export default function Cumpleaños() {
    return (
        <div className="app">
       <Header/>
      <div className="container app__container">
        
        <div className="row app__row">
          <div className="col-lg-3 col-sm-12">
           

         <Sidebar />

          </div>
          <div className="col-lg-9 col-sm-12">
        
        <Contenido titulo={img} img1={img1} img2={img2} img3={img3}/>
        </div>
         <div className="col-lg-12 col-sm-12">
         
         <Footer/>
        
         </div>
     </div>
    
     </div>
     </div>
    )
}
