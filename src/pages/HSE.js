import React from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contenido from '../components/Contenido';
import Recurso385 from '../assets/projects_images/Recurso 385.png'
import Recurso604 from '../assets/projects_images/Recurso 604.png'
 
 const img=<img src={Recurso385} alt="avatar" className="imgTitulo" />
 const imgcontent= <img src={Recurso604} alt="avatar" className="imgcontent" />
 const content=<div className="contenidoo">
        <div className="row ">
         <div className="col-lg-6 col-md-12 col-sm-12" >
       <h3>Codigo de Conducta</h3>
       <h5>La importancia en <b>ISS</b> de trabajar guiados por un <b>Codigo de Conducta</b>,
         refuerza el compromiso de los diferentes paises donde nos encontramos 
         con el proposito de estar alineados a nuestros valores: honestidad, 
         calidad, responsabilidad y espiritu emprendedor. Además, complementa 
         politicas, reglas, y directrices de la empresa.
       </h5>
      
       
       <h5>El <b>codigo de conducta</b> de ISS establece principios claves aplicables 
         a todas las operaciones y empleados, y están relacionados con:</h5>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12" >
        <div>{imgcontent}</div>
        </div>
        </div>
         <h5>
           <ul>
             <li>Conducta Persona de los empleados.</li>
             <li>Anti-Corrupción y Soborno.</li>
             <li>Cumplimiento de las leyes Sobre Competencia.</li>
             <li>Relacion con Socios Comerciales.</li>
             <li>Estándares de ISS para el Puesto de Trabajo.</li>
             <li>Responsabilidad Empresarial.</li>
           </ul>
         
         
        
         
        
        
         </h5>
         <h5>El valor de continuar mejorando el clima laboral, es una de nuestras prioridades.</h5>
       
         <Link to="/" className="link">Puedes leer en detalle el codigo de conducta aquí</Link>
       
       
       </div>;
  
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
