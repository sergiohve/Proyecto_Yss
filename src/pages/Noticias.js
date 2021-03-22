import React, {useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar'

import Footer from '../components/Footer';
import Header from '../components/Header';
import Contenido from '../components/Contenido';
import Recurso412 from '../assets/projects_images/Recurso 412.png'
 import Recurso497 from '../assets/projects_images/Recurso 497.png'
 import Recurso498 from '../assets/projects_images/Recurso 498.png'
 import Recurso499 from '../assets/projects_images/Recurso 499.png'
 import Recurso500 from '../assets/projects_images/Recurso 500.png'
import Recurso319 from '../assets/projects_images/Recurso 319.png'


 const img=<img src={Recurso412} alt="avatar" className="imgTitulo" />
  const noti1=<div><img src={Recurso497} alt="avatar" className="noti1" /><hr/></div>
 const noti2=<div><img src={Recurso498} alt="avatar" className="img2" /><hr/></div>
 const noti3=<div><img src={Recurso499} alt="avatar" className="img3" /><hr/></div>
 const noti4=<img src={Recurso500} alt="avatar" className="img3" />
export default function Cumpleaños() {
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
        
        <Contenido titulo={img} noti1={noti1} noti2={noti2} noti3={noti3} noti4={noti4}/>
        </div>
         <div className="col-lg-12 col-sm-12">
         
         <Footer imgFooter={Recurso319}/>
        
         </div>
     </div>
    
     </div>
     </div>
    )
}
