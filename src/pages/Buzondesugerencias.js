<<<<<<< HEAD
import React, {useState, useEffect} from 'react'
=======
import React from 'react'
>>>>>>> 747da2c3673f3fb89a19244ea350cad43c9ce635
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
<<<<<<< HEAD
import axios from "axios"
import Recurso319 from '../assets/projects_images/Recurso 319.png'
 const img=<img src={Recurso504} alt="avatar" className="imgTitulo" />
 

 

export default function Buzondesugerencias() {
 const [datos, setDatos] = useState({
        nombre: "",
        email: "",
        descripcion: ""
      
    })

    const handleInputChange = (event) => {
       
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
           

                
                
        })
    }
const enviarDatos = (event) => {
       
        console.log('enviando datos...' + datos.nombre + ' ' + datos.mail + ' ' + datos.descripcion)
       

    
        axios.post("https...", {

                nombre: datos.nombre,
                email: datos.email,
                descripcion: datos.descripcion,
               

          })
          .then(function (response) {
            console.log(response);
           
          })
          .catch(function (error) {
            console.log(error);
          });


         


    }

  const content=(
    <div style={{background: "#6BABF8", width:"103%", marginLeft: "-13px", marginTop: "-12px", borderRadius: "5px"}}>
=======
 
 const img=<img src={Recurso504} alt="avatar" className="imgTitulo" />
 

 

export default function Buzondesugerencias() {
  const content=(
    <div style={{background: "#0084ff", width:"103%", marginLeft: "-13px", marginTop: "-12px", borderRadius: "5px"}}>
>>>>>>> 747da2c3673f3fb89a19244ea350cad43c9ce635
       <div className="row app__row">
          <div className="col-lg-12 col-sm-12">
          
           <input type="text" className="form-control" style={{backgroundColor: "black"}}  placeholder="Nombre:" style={{marginTop: "20px"}}/>

            <input type="Email" className="form-control" placeholder="Email:" style={{marginTop: "30px"}}/>

<<<<<<< HEAD
             <textarea className="form-control" placeholder="Descripción:" style={{marginTop: "30px", height: "400px"}}></textarea>
=======
             <textarea className="form-control" placeholder="Email:" style={{marginTop: "30px", height: "400px"}}></textarea>
>>>>>>> 747da2c3673f3fb89a19244ea350cad43c9ce635
          </div>
          
        </div>
       
<<<<<<< HEAD
         <div style={{marginLeft: "250px"}}>
           <Link to="/">
         <img src={Recurso645} alt="avatar" style={{width: "150px", position: "absolute", marginTop: "9px"}} />
         <img src={Recurso646} alt="avatar" style={{width: "150px"}} />
         </Link>
        <Link to="/"> <img src={Recurso643} alt="avatar" style={{width: "150px", position: "absolute", marginTop: "9px"}} />
         <img src={Recurso644} alt="avatar" style={{width: "150px"}} />
=======
         <div style={{marginLeft: "200px"}}>
           <Link to="/">
         <img src={Recurso645} alt="avatar" style={{width: "200px", position: "absolute", marginTop: "9px"}} />
         <img src={Recurso646} alt="avatar" style={{width: "200px"}} />
         </Link>
        <Link to="/"> <img src={Recurso643} alt="avatar" style={{width: "200px", position: "absolute", marginTop: "9px"}} />
         <img src={Recurso644} alt="avatar" style={{width: "200px"}} />
>>>>>>> 747da2c3673f3fb89a19244ea350cad43c9ce635
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
         
         <Footer imgFooter={Recurso319}/>
        
         </div>
     </div>
    
     </div>
     </div>
    )
}
