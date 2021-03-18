import React from 'react'
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

 const content=
   <div className="contenidoo" >
        <div className="row ">
         <div className="col-lg-3 col-md-12 col-sm-12" >
         <img src={Recurso531} alt="avatar" className="noti1" />
           </div>
      
        <div className="col-lg-9 col-md-12 col-sm-12" >
        <img src={Recurso535} alt="avatar" className="noti1" />
       </div>
       </div>
       <hr/>

       <div className="row ">
         <div className="col-lg-9 col-md-12 col-sm-12" >
         
         <img src={Recurso534} alt="avatar" className="img3" />
           </div>
      
        <div className="col-lg-3 col-md-12 col-sm-12" >
        <img src={Recurso530} alt="avatar" className="img2" />
        
       </div>
       </div>
       <hr/>
       <div className="row ">
         <div className="col-lg-3 col-md-12 col-sm-12" >
         <img src={Recurso529} alt="avatar" className="img3" />
           </div>
      
        <div className="col-lg-9 col-md-12 col-sm-12" >
        <img src={Recurso533} alt="avatar" className="img2" />
       </div>
       </div>
       <hr/>
       <div className="row ">
         <div className="col-lg-9 col-md-12 col-sm-12" >
         <img src={Recurso532} alt="avatar" className="img3" />
           </div>
      
        <div className="col-lg-3 col-md-12 col-sm-12" >
        <img src={Recurso528} alt="avatar" className="img3" />
       </div>
       </div>
       
       </div>;
  

export default function SabiasQue() {
 
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
