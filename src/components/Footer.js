import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Recurso137 from '../assets/projects_images/Recurso 137.png'

import Recurso118 from '../assets/projects_images/Recurso 118.png'

const useStyles = makeStyles((theme) => ({
  root: {
  
    flexGrow: 1,
    marginBottom: "30px",
    marginTop: "80px",
    color: "black",
    marginTop: "300px",
  
  },
  imgFooter: {
    width: "330px",
    textAlign: "center",
     display: "block", 
     margin:"auto",
  }
 

}));

const Footer = () => {
  const classes = useStyles();

    
    
    return (
        <div className={classes.root} >
         <img src={Recurso137} alt="avatar"  />
        <div className={classes.imgFooter} >  <img src={Recurso118} alt="avatar" className="sidebar__avr" /></div>
         
       
        </div>
    )
}
export default Footer;