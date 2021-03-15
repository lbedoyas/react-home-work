import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

// Opcion 1
// function Hola(props) {
//     return <h2>{props.titulo}</h2>
// }

// // Opcion 2
// const Hola = (props) => <h2>{props.titulo}</h2>

// Opcion 3 
// Por medio de una clase 
class Hola extends Component {
    render(){
        return <h2>{this.props.titulo}{this.props.otroejemplo}</h2>
    }
}

class Texto extends Component {
    render() {
      const textoSegunBool = this.props.boolean ? 'cierto' : 'false'
      const isActivated = this.props.isActivated ? 'on' : 'off'
      const mapeoNumeros = this.props.arrayOfNumber.map(n => n * 2)
      const mensaje = 'mensaje'
        return(
            <div>
                <p>{this.props.texto}</p>
                <p>{this.props.numero}</p>
                <p>{this.props.ejemplo}</p>
                <p>{JSON.stringify(this.props.boolean)}</p>
                <p>{textoSegunBool}</p>
                <p>{mensaje}</p>
                <p>{mapeoNumeros.join(', ')}</p>
                <p>{this.props.objectWithInfo.key}</p>
            </div> 
        )
    }
}

class App2 extends Component {
render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Hola titulo='holaaaaa!!!' otroejemplo='otro mas' />
            <p>
              Este se trae de un componente
            </p>
            <Texto 
            numero={2} 
            texto='Esto es un string'
            ejemplo='otro texto'
            boolean={true} 
            isActivated
            arrayOfNumber={[1,2,3]}
            objectWithInfo={{key: 'valor1', key2: 'otroValor'}} />
          </header>
        </div>
      );
    }
}

export default App2;
