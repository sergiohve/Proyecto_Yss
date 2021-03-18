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
import Buzondesugerencias from './pages/Buzondesugerencias';
import Bienestar from './pages/Bienestar';
import Login from './pages/Login';


function App() {

  
  return (

    <div className="app">
    
          
          <Switch >
              <Route exact path="/"  component={Login} />
              <Route  path="/sabiasque"  component={SabiasQue} />
              <Route  path="/cumpleaños"  component={Cumpleaños} />
              <Route  path="/nacimientos"  component={Nacimientos} />
              <Route  path="/nuevosingresos"  component={NuevosIngresos} />
              <Route  path="/nuestroequipo"  component={NuestroEquipo} />
              <Route  path="/mascercadeti"  component={MasCercadeti} />
              <Route  path="/noticias"  component={Noticias} />
              <Route  path="/galeria"  component={Galeria} />
              <Route  path="/reconocimientoapple"  component={ReconocimientoApple} />
              <Route  path="/capacitacion"  component={Capacitacion} />
              <Route  path="/beneficios"  component={Beneficios} />
              <Route  path="/hse"  component={HSE} />
              <Route  path="/buzondesugerencias"  component={Buzondesugerencias} />
               <Route  path="/bienestar"  component={Bienestar} />
              <Route component={PaginaNoEncontrada}/>
             
               
        </Switch>
         
       
     
        
      </div>
    

  );
}

export default App;