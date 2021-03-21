import React, {useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contenido from '../components/Contenido';
import Recurso460 from '../assets/projects_images/Recurso 460.png'
import Recurso531 from '../assets/projects_images/Recurso 531.png'
import Recurso535 from '../assets/projects_images/Recurso 535.png'
import Recurso533 from '../assets/projects_images/Recurso 533.png'
import Recurso529 from '../assets/projects_images/Recurso 529.png'
import Recurso532 from '../assets/projects_images/Recurso 532.png'
import Recurso530 from '../assets/projects_images/Recurso 530.png'
import Recurso534 from '../assets/projects_images/Recurso 534.png'
import Recurso528 from '../assets/projects_images/Recurso 528.png'




const img=<img src={Recurso460} alt="avatar" className="imgTitulo" />

export default function SabiasQue() {
 
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


 
const content=(
    <div>
  
                {
                  datos.map(item =>(
                    <div className="row">
                     <div className="col-lg-3 col-sm-12">

                    <p key="item.id"><img src={item.Imagen.hash} alt={item.Imagen.name}/></p>
                    </div>
                     <div className="col-lg-9 col-sm-12">

                    <p key="item.id" style={{color:"#030037", fontWeight: "bold"}}>{item.titulo}</p>
                    <p key="item.id" style={{color:"#030037"}}>{item.contenido}</p>
                    </div>
                    </div>





                  ))
                }
                
                
      
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
        
        <Contenido titulo={img} contenido={content} />
        </div>
         <div className="col-lg-12 col-sm-12">
         
         <Footer/>
        
         </div>
     </div>
    
     </div>
     </div>
        
    )
}
