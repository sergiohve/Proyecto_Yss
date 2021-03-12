import React from 'react'
import Sidebar from '../components/Sidebar'

import Footer from '../components/Footer';
import Header from '../components/Header';
import Contenido from '../components/Contenido';
import Recurso412 from '../assets/projects_images/Recurso 412.png'
 import Recurso497 from '../assets/projects_images/Recurso 497.png'
 import Recurso498 from '../assets/projects_images/Recurso 498.png'
 import Recurso499 from '../assets/projects_images/Recurso 499.png'
 import Recurso500 from '../assets/projects_images/Recurso 500.png'



 const img=<img src={Recurso412} alt="avatar" className="imgTitulo" />
  const noti1=<img src={Recurso497} alt="avatar" className="noti1" />
 const noti2=<img src={Recurso498} alt="avatar" className="img2" />
 const noti3=<img src={Recurso499} alt="avatar" className="img3" />
 const noti4=<img src={Recurso500} alt="avatar" className="img3" />
export default function Cumpleaños() {
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
         
         <Footer/>
        
         </div>
     </div>
    
     </div>
     </div>
    )
}
