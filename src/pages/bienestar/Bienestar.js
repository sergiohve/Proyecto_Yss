import React from 'react'
import {Link} from "react-router-dom"
import "./bienestar.css"
import Recurso14 from '../../assets/projects_images/Recurso 14.png'
import Recurso15 from '../../assets/projects_images/Recurso 15.png'
import Recurso20 from '../../assets/projects_images/Recurso 20.png'
import Recurso17 from '../../assets/projects_images/Recurso 17.png'
import Recurso18 from '../../assets/projects_images/Recurso 18.png'
import Recurso34 from '../../assets/projects_images/Recurso 34.png'
import Recurso11 from '../../assets/projects_images/Recurso 11.png'
import Recurso10 from '../../assets/projects_images/Recurso 10.png'
import Recurso30 from '../../assets/projects_images/Recurso 30.png'
export default function Bienestar() {
    return (
        <div>
        <div className="bienestar">
        
        <img src={Recurso14}  className="imgBien"/>
        <img src={Recurso15}  className="imgBien2"/>
        <img src={Recurso34} className="linea"/>
        
        <img src={Recurso17}  className="imgBien3"/>
        <img src={Recurso18}  className="imgBien4"/>
        <Link to="/beneficios">
        <img src={Recurso11}  className="imgBien5"/>
        <img src={Recurso10}  className="imgBien6"/>
        </Link>
        
        <Link to="/bienestar2">
        <img src={Recurso30}  className="imgBien7"/>
        </Link>
        <img src={Recurso20}  className="imgBien1"/>

        </div>
        </div>
    )
}
