import React from 'react'
import { Link } from 'react-router-dom';
import Recurso121 from '../assets/projects_images/Recurso 121.png'
import Recurso125 from '../assets/projects_images/Recurso 125.png'
import Recurso126 from '../assets/projects_images/Recurso 126.png'
import Recurso127 from '../assets/projects_images/Recurso 127.png'
import Recurso128 from '../assets/projects_images/Recurso 128.png'
import Recurso129 from '../assets/projects_images/Recurso 129.png'
import Recurso130 from '../assets/projects_images/Recurso 130.png'
import Recurso119 from '../assets/projects_images/Recurso 119.png'
import Recurso124 from '../assets/projects_images/Recurso 124.png'
import Recurso122 from '../assets/projects_images/Recurso 122.png'
import Recurso120 from '../assets/projects_images/Recurso 120.png'
import Recurso123 from '../assets/projects_images/Recurso 123.png'
import Recurso108 from '../assets/projects_images/Recurso 108.png'

              
              
const Sidebar = () => {
    



    return (
        <div className="sidar">
        <div className="row">
         <div className="col-lg-10  col-md-9 col-sm-9">
          <Link to="/cumpleaños" className="link"> <img src={Recurso121} alt="avatar" className="sidebar__avatar" /><img src={Recurso120} alt="avatar" className="icon_flotante" /></Link>
         </div>
         <div className="col-lg-2  col-md-3 col-sm-3">
          <Link to="/" className="link"> <img src={Recurso119} alt="avatar" className="sidebar_r" /></Link>
         </div>
         </div>
           
            
                 <div className="sidebar__item sidebar__resume">
               <Link to="/sabiasque" className="link"> <img src={Recurso130} alt="avatar" className="sidebar__avr" /></Link>
                </div>

                <div className="sidebar__item sidebar__resume">
                <Link to="/cumpleaños" className="link"><img src={Recurso125} alt="avatar" className="sidebar__avr" /></Link>
                </div>

                <div className="sidebar__item sidebar__resume">
                <Link to="/nuestroequipo" className="link"><img src={Recurso128} alt="avatar" className="sidebar__avr" /></Link>
                </div>
            
                 <div className="sidebar__item sidebar__resume">
                <Link to="/nuevosingresos" className="link"> <img src={Recurso127} alt="avatar" className="sidebar__avr" /></Link>
                </div>

                <div className="sidebar__item sidebar__resume">
                <Link to="/cumpleaños" className="link"><img src={Recurso129} alt="avatar" className="sidebar__avr" /></Link>
                </div>
                 <div className="sidebar__item sidebar__resume">
                <Link to="/Buzondesugerencias" className="link"><img src={Recurso108} alt="avatar" className="sidebar__avr" /></Link>
                </div>
            
                
            
        <div className="row">
         <div className="col-lg-10  col-md-12 col-sm-12">
          <Link to="/cumpleaños" className="link">  <img src={Recurso124} alt="avatar" className="sidebar_" /> <img src={Recurso123} alt="avatar" className="icon_flotante" /></Link>
         </div>
         <div className="col-lg-2  col-md-2 col-sm-2">
          <Link to="/" className="link"> <img src={Recurso122} alt="avatar" className="sideb" /></Link>
         </div>
         </div>
           
           
            
            
            
        </div>
    )
}

export default Sidebar;