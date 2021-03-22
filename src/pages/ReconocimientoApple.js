import React, {useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import {Link} from "react-router-dom"
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contenido from '../components/Contenido';
import Recurso134 from '../assets/projects_images/Recurso 134.png'
import Recurso512 from '../assets/projects_images/Recurso 512.png'
import Recurso511 from '../assets/projects_images/Recurso 511.png'
import Recurso509 from '../assets/projects_images/Recurso 509.png'
import Recurso510 from '../assets/projects_images/Recurso 510.png'
import Recurso513 from '../assets/projects_images/Recurso 513.png'
import Recurso319 from '../assets/projects_images/Recurso 319.png'
import Recurso515 from '../assets/projects_images/Recurso 515.png'
import Recurso514 from '../assets/projects_images/Recurso 514.png'

 
 const img=<img src={Recurso134} alt="avatar" className="imgTitulo" />
 


export default function Cumpleaños() {

const [datos, setDatos]= useState([]);
 

 useEffect(() => {
   
   obtenerDatos()
  
  
 }, [setDatos])

 const obtenerDatos = async ()=>{
   const data=await fetch("http://dev.love.cl:11337/reconocimiento-apples");
   const contentt= await data.json()
   setDatos(contentt)
   console.log(contentt)
 }
const content=(
    <div>
         <div className="row">
       <div className="col-lg-12 col-sm-12">
       <img src={Recurso512} alt="avatar" className="mantexto" />
       <img src={Recurso511} alt="avatar" className="manzana" />
      </div>
 </div>      
</div>
  )

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
