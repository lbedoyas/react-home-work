import React, { Component } from 'react';
import './eventos.css';

class Hijo extends Component{

    manejadorClick = () => {
        this.props.onSaluda('Evento personalizado')
    }
    render(){
        return (
            <div className="box blue">
                <h2>Hijo</h2>
                <button onClick={this.manejadorClick}>
                    Saludar
                </button>
            </div>
        )
    }
}

class EventosPersonalizados extends Component{
    state = {
        name: ''
    }
    manejador = (name) => {
        this.setState({name})
    }
    render() {
    const styles = {
        padding: '3em'
    }
        return(
            <div style={styles}>
                <div className="box red">
                <Hijo
                onSaluda={this.manejador} />
                </div>
                <h1>
                    Nombre: {this.state.name}
                </h1>
            </div>
        )
    }
}

export default EventosPersonalizados;