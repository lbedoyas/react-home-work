import React, { Component } from 'react';
//import './tarjetaFruta.css'
import styles from './tarjetaFruta.module.css';

console.log(styles);


class TarjetaFruta extends Component {
    state = { cantidad: 0 }
    agregar = () => {
        this.setState(
            { 
                cantidad: this.state.cantidad + 1 
            })
    }

    quitar = () => {
        this.setState(
            { 
                cantidad: this.state.cantidad - 1 
            })
    }

    limpiar = () => {
        this.setState(
            { 
                cantidad: 0
            })
    
    }

    render(){
    const condicion = this.state.cantidad > 0
    //const clases = condicion ? 'tarjetafruta-activa' : 'tarjetafruta'
    const clases = `tarjetafruta ${condicion ? styles['tarjetafruta-activa'] : ''}`

        return(
            <div className={clases}>
                <h3>
                    {this.props.name}
                </h3>
                <div>Cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar.bind(this)}
                            >
                             Agregar
                </button>
                <button
                onClick={this.quitar}
                 >
                    Quitar
                </button>
                <button onClick={this.limpiar}>
                    Limpiar
                </button>
                <hr />
                <p>$ {this.props.price}</p>
                <br/>
                <p>Total: {this.props.price * this.state.cantidad} </p>
                
            </div>
        )
    }
}


export default TarjetaFruta;