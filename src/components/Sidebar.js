import React from 'react'
import { Link } from 'react-router-dom';
import Recurso121 from '../assets/projects_images/Recurso 121.png'
import Recurso125 from '../assets/projects_images/Recurso 125.png'
import Recurso126 from '../assets/projects_images/Recurso 126.png'
import Recurso127 from '../assets/projects_images/Recurso 127.png'
import Recurso128 from '../assets/projects_images/Recurso 128.png'
import Recurso129 from '../assets/projects_images/Recurso 129.png'
import Recurso130 from '../assets/projects_images/Recurso 130.png'

import Recurso124 from '../assets/projects_images/Recurso 124.png'

const Sidebar = () => {
    



    return (
        <div className="sidar">
            <img src={Recurso121} alt="avatar" className="sidebar__avatar" />
            
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
                <Link to="/nacimientos" className="link"><img src={Recurso126} alt="avatar" className="sidebar__avr" /></Link>
                </div>
            
               
                
            
                <div className="sidebar__item sidebar__resume">
                <Link to="/cumpleaños" className="link"><img src={Recurso129} alt="avatar" className="sidebar__avr" /></Link>
                </div>
            
                
            
           
           
            <img src={Recurso124} alt="avatar" className="sidebar__avatar" />
            
            
            
        </div>
    )
}

export default Sidebar;