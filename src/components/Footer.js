import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Recurso137 from '../assets/projects_images/Recurso 137.png';
import Recurso395 from '../assets/projects_images/Recurso 395.png';
 
 

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginBottom: "35px",
   marginTop: "30px",
  },
  imgTitulo: {
     width: "100%",
     
  },
  imgTitulo1:{
    width: "300px",
    display:"block",
     margin:"auto",  
  }
});

export default function Footer({imgFooter}) {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      
     
       <div className="col-lg-12 col-sm-12">
         
         <img src={Recurso137} alt="avatar" className={classes.imgTitulo} />
         <img src={imgFooter} alt="avatar" className={classes.imgTitulo1}/>
         </div>
         
         
       
      
    </div>
  );
}