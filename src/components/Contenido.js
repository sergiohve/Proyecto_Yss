import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: 'calc(787px - 200px)',
    height: 'calc(100% - 200px)',
    marginBottom: "30px",
    background: "#b8babc",
    
    
  },
  
});

export default function Contenido({titulo}) {
  const classes = useStyles();
 

  return (
    <div>
      <h1>{titulo}</h1>
    <Card className={classes.root}>
      <CardContent>
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.

¿Por qué lo usamos?








</p>



      </CardContent>
      
      
    </Card>
    </div>
  );
}