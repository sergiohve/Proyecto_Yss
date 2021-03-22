import React, {useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contenido from '../components/Contenido';
import Recurso332 from '../assets/projects_images/Recurso 332.png'
import Recurso514 from '../assets/projects_images/Recurso 514.png'
import Recurso515 from '../assets/projects_images/Recurso 515.png'
import Recurso319 from '../assets/projects_images/Recurso 319.png'

 const img=<img src={Recurso332} alt="avatar" className="imgTitulo" />
 const content=<div>
    
 <div className="row">
       <div className="col-lg-12 col-sm-12">
       <img src={Recurso515} alt="avatar" className="capacita" />
       <img src={Recurso514} alt="avatar" className="manCapa" />
      </div>
 </div>

</div>
export default function Capacitacion() {
   const [datos, setDatos]= useState([]);
 

 useEffect(() => {
   
   obtenerDatos()
  
  
 }, [setDatos])

 const obtenerDatos = async ()=>{
   const data=await fetch("http://dev.love.cl:11337/sabias-que-contenidos");
   const contentt= await data.json()
   setDatos(contentt)
   console.log(contentt)
 }


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
         
         <Footer imgFooter={Recurso319}/>
        
         </div>
     </div>
  
     </div>
     </div>
    )
}
