import logo from './logo.svg';
import './App.css';
// import TarjetaFruta from './components/ComponentFuctional'
import TarjetaFruta from './components/FirstComponent/ComponentClassTestCss';
import React from 'react';
import Contador from './components/MutacionFunctions/Mutacion';
import Video from './components/MutacionFunctions/Mutacion2';
import SpreadProps from './components/MutacionFunctions/SpreadProps';
import MouseEventos from './components/Eventos/MouseEvent';
import InputOptions from './components/Eventos/InputsOptions';
import PersistenciaEventos from './components/Eventos/ConservarEventos';
import EventosPersonalizados from './components/Eventos/eventosPersonalizados';
import RenderizadosCondicionales from './components/Eventos/RenderizadosCondicionales';
import ChildrenProps from './components/Eventos/ChildrenProps';
import Fragments from './components/childrens/Fragments';
import Portals from './components/childrens/Portals';
import ExamplePropsTypes from './components/props/ExamplePropsTypes';

function App() {
  return (
    <div className="App">
     <TarjetaFruta name='sandia' price={500} />
     {/* <TarjetaFruta name='Manzana' price={3000} />
     <TarjetaFruta name='Naranja' price={4000} /> */}
    <Contador />
    <Video />
    <hr/>
    <SpreadProps />
    <MouseEventos />
    <InputOptions />
    <EventosPersonalizados />
    <RenderizadosCondicionales />
    <ChildrenProps />
    <Fragments />
    <Portals>
      Hola desde un portal modal
    </Portals>
    <ExamplePropsTypes />
    </div>
  );
}

export default App;
