import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cumpleaños from './pages/Cumpleaños';
import Nacimientos from './pages/Nacimientos';
import NuevosIngresos from './pages/NuevosIngresos';
import SabiasQue from './pages/SabiasQue';
import NuestroEquipo from './pages/NuestroEquipo';
import PaginaNoEncontrada from './pages/PaginaNoEncontrada';
import MasCercadeti from './pages/MasCercadeti';
import Noticias from './pages/Noticias';
import Galeria from './pages/Galeria';
import ReconocimientoApple from './pages/ReconocimientoApple';
import Capacitacion from './pages/Capacitacion';
import Beneficios from './pages/Beneficios';
import HSE from './pages/HSE';
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
              <Route exact path="/mascercadeti"  component={MasCercadeti} />
               <Route exact path="/noticias"  component={Noticias} />
               <Route exact path="/galeria"  component={Galeria} />
               <Route exact path="/reconocimientoapple"  component={ReconocimientoApple} />
                <Route exact path="/capacitacion"  component={Capacitacion} />
                 <Route exact path="/beneficios"  component={Beneficios} />
                  <Route exact path="/hse"  component={HSE} />
              <Route component={PaginaNoEncontrada}/>
             
               
        </Switch>
         
       
     
        
      </div>
    

  );
}

export default App;