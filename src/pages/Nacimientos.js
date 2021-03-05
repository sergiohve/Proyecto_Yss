import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contenido from '../components/Contenido'
import Recurso483 from '../assets/projects_images/Recurso 483.png'
 
 const img=<img src={Recurso483} alt="avatar" className="imgTitulo" />
export default function Nacimientos() {
    return (
        <div className="app">
     <Header/>
      <div className="container app__container">
        
        <div className="row app__row">
          <div className="col-lg-3 col-sm-12">
           

         <Sidebar />

          </div>
          <div className="col-lg-9 col-sm-12">
        
        <Contenido titulo="Nacimientos"/>
        </div>
         <div className="col-lg-12 col-sm-12">
         
         <Footer/>
        
         </div>
     </div>
     
     </div>
     </div>
    )
}
