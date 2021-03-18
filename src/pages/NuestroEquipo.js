import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contenido from '../components/Contenido';
import Recurso581 from '../assets/projects_images/Recurso 581.png'
import Recurso537 from '../assets/projects_images/Recurso 537.png'
import Recurso538 from '../assets/projects_images/Recurso 538.png'
 const img=<img src={Recurso581} alt="avatar" className="imgTitulo" />
 const content=<div>
    
 <div className="row">
       <div className="col-lg-12 col-sm-12">
       <img src={Recurso537} alt="avatar" className="capacita" />
       <img src={Recurso538} alt="avatar" className="organigramaEquipo" />
      </div>
 </div>

</div>
export default function NuestroEquipo() {
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
