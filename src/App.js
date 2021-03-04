import React from 'react';
import { Route, Switch } from 'react-router-dom';






import Cumpleaños from './pages/Cumpleaños';
import Nacimientos from './pages/Nacimientos';
import NuevosIngresos from './pages/NuevosIngresos';
import SabiasQue from './pages/SabiasQue';
import NuestroEquipo from './pages/NuestroEquipo';
import PaginaNoEncontrada from './pages/PaginaNoEncontrada';

import Login from './pages/Login';


function App() {

  
  return (

    <div className="app">
    
          
          <Switch >
              <Route exact path="/"  component={Login} />
              <Route exact path="/sabiasque"  component={SabiasQue} />
              <Route exact path="/cumpleaños"  component={Cumpleaños} />
              <Route exact path="/nacimientos"  component={Nacimientos} />
              <Route exact path="/nuevosingresos"  component={NuevosIngresos} />
              <Route exact path="/nuestroequipo"  component={NuestroEquipo} />
              <Route component={PaginaNoEncontrada}/>
             
               
        </Switch>
         
       
     
        
      </div>
    

  );
}

export default App;