import React from 'react'
import {Link} from "react-router-dom"


import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contenido from '../components/Contenido';
import Recurso504 from '../assets/projects_images/Recurso 504.png'
import Recurso542 from '../assets/projects_images/Recurso 542.png'
import Recurso643 from '../assets/projects_images/Recurso 643.png'
import Recurso644 from '../assets/projects_images/Recurso 644.png'
import Recurso645 from '../assets/projects_images/Recurso 645.png'
import Recurso646 from '../assets/projects_images/Recurso 646.png'
import  {useForm} from "react-hook-form"
 
 const img=<img src={Recurso504} alt="avatar" className="imgTitulo" />
 

 

export default function Buzondesugerencias() {
  const content=(
    <div style={{background: "#0084ff", width:"103%", marginLeft: "-13px", marginTop: "-12px", borderRadius: "5px"}}>
       <div className="row app__row">
          <div className="col-lg-12 col-sm-12">
          
           <input type="text" className="form-control" style={{backgroundColor: "black"}}  placeholder="Nombre:" style={{marginTop: "20px"}}/>

            <input type="Email" className="form-control" placeholder="Email:" style={{marginTop: "30px"}}/>

             <textarea className="form-control" placeholder="Email:" style={{marginTop: "30px", height: "400px"}}></textarea>
          </div>
          
        </div>
       
         <div style={{marginLeft: "200px"}}>
           <Link to="/">
         <img src={Recurso645} alt="avatar" style={{width: "200px", position: "absolute", marginTop: "9px"}} />
         <img src={Recurso646} alt="avatar" style={{width: "200px"}} />
         </Link>
        <Link to="/"> <img src={Recurso643} alt="avatar" style={{width: "200px", position: "absolute", marginTop: "9px"}} />
         <img src={Recurso644} alt="avatar" style={{width: "200px"}} />
         </Link>
        
         
         </div>
    </div>
   );
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
