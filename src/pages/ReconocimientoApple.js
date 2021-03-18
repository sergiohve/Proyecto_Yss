import React from 'react'
import Sidebar from '../components/Sidebar'

import Footer from '../components/Footer';
import Header from '../components/Header';
import Contenido from '../components/Contenido';
import Recurso134 from '../assets/projects_images/Recurso 134.png'
import Recurso512 from '../assets/projects_images/Recurso 512.png'
import Recurso511 from '../assets/projects_images/Recurso 511.png'
 
 const img=<img src={Recurso134} alt="avatar" className="imgTitulo" />
 const content=<div>
    
    <div className="row">
          <div className="col-lg-12 col-sm-12">
          <img src={Recurso512} alt="avatar" className="recoApple" />
          <img src={Recurso511} alt="avatar" className="manReco" />
         </div>
    </div>

 </div>


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
        
        <Contenido titulo={img} contenido={content}/>
        </div>
         <div className="col-lg-12 col-sm-12">
         
         <Footer/>
        
         </div>
     </div>
     
     </div>
     </div>
    )
}
