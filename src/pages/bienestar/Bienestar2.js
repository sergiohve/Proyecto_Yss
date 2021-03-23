import React from 'react'
import {Link} from "react-router-dom"
import "./bienestar.css"
import Recurso25 from '../../assets/projects_images/Recurso 25.png'
import Recurso15 from '../../assets/projects_images/Recurso 15.png'
import Recurso20 from '../../assets/projects_images/Recurso 20.png'
import Recurso24 from '../../assets/projects_images/Recurso 24.png'

import Recurso34 from '../../assets/projects_images/Recurso 34.png'
import Recurso11 from '../../assets/projects_images/Recurso 11.png'
import Recurso10 from '../../assets/projects_images/Recurso 10.png'
import Recurso30 from '../../assets/projects_images/Recurso 30.png'
import Recurso29 from '../../assets/projects_images/Recurso 29.png'
export default function Bienestar2() {
    return (
        <div>
        <div className="bienestar">
        
        <img src={Recurso25}  className="imgBien22"/>
        <img src={Recurso15}  className="imgBien2"/>
        <img src={Recurso34} className="linea"/>
        
        <img src={Recurso24}  className="imgBien33"/>
       
        <Link to="/beneficios">
        <img src={Recurso11}  className="imgBien5"/>
        <img src={Recurso10}  className="imgBien6"/>
        </Link>
        <Link to="/bienestar">
        <img src={Recurso29}  className="imgBien8"/>
        </Link>
        <Link to="/bienestar3">
        <img src={Recurso30}  className="imgBien7"/>
        </Link>
        
        <img src={Recurso20}  className="imgBien1"/>

        </div>
        </div>
    )
}
