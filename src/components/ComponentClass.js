import React, { Component } from 'react';

class TarjetaFruta extends Component {
    // constructor(){
    //     super()
    //     this.agregar = this.agregar.bind(this);
    //     const METHODS = [
    //         'agregar',
    //         'quitar',
    //         'limpiar'
    //     ]

    //     METHODS.forEach((method) => {
    //         this[method] = this[method].bind(this)
    //     })

    //     this.state = {
    //         cantidad: 0
    //     }
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


    // agregar(){
    //     this.setState(
    //         { 
    //             cantidad: this.state.cantidad + 1 
    //         })
    // }

    // quitar(){
    //     this.setState(
    //         { 
    //             cantidad: this.state.cantidad - 1 
    //         })
    // }

    // limpiar(){
    //     this.setState(
    //         { 
    //             cantidad: 0
    //         })
    // }


    render(){
    const condicion = this.state.cantidad > 0
    const styles = {
        border: '1px solid black',
        marginBottom: '1em',
        borderRadius: '0.5em',
        padding: '1em',
        background: this.state.cantidad > 0 ? 'linear-gradient(45deg, black, #4a02f7)' : '#FFF',
        color: condicion ? '#FFF' : '#000',
        transition: 'all 950ms ease-out'
    }


        return(
            <div style={styles}>
                <h3>
                    {this.props.name}
                </h3>
                <div>Cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar.bind(this)}
                //  onClick={
                //      ()=> {
                //          this.state.cantidad = 100
                //          Forzar cambio de estado
                //          this.forceUpdate()
                //          this.setState({ cantidad: this.state.cantidad + 1 })
                //             }}
                            >
                             Agregar
                </button>
                <button
                // onClick={this.quitar.bind(this)}
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