import React from 'react'
import Sidebar from '../components/Sidebar'

import Footer from '../components/Footer';
import Header from '../components/Header';
import Contenido from '../components/Contenido';
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
        
        <Contenido titulo="Nuestro equipo"/>
        </div>
        </div>
        <Footer/>
        </div>
        </div>
    )
}
