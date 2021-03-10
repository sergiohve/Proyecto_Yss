import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import p404 from '../assets/projects_images/p404.png'
const useStyles = makeStyles({
  root: {
    width: "100%",
    marginBottom: "35px",
    textAlign: "center",
    marginTop: "300px",
    fontWeight: "bold",
    backgroundImage: `url(${p404})`
   
  }
});
export default function PaginaNoEncontrada() {
      const classes = useStyles();
    return (
        <div className={classes.root}>
      
        
        PaginaNoEncontrada
       
    </div>
    )
}
