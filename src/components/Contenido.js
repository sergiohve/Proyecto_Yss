import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: 'calc(792px - 200px)',
    height: 'calc(100% - 100px)',
    marginBottom: "30px",
    background: "#b8babc",
    
    
  },
  
});

export default function Contenido({titulo, contenido}) {
  const classes = useStyles();
 

  return (
    <div>
      <h1>{titulo}</h1>
    <Card className={classes.root}>
      <CardContent>
        {contenido}


      </CardContent>
      
      
    </Card>
    </div>
  );
}