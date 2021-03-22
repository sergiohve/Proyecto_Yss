import React, {useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contenido from '../components/Contenido';
import Recurso460 from '../assets/projects_images/Recurso 460.png'
import Recurso319 from '../assets/projects_images/Recurso 319.png'




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
         
         <Footer imgFooter={Recurso319}/>
        
         </div>
     </div>
    
     </div>
     </div>
        
    )
}
