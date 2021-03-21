import React, { Component } from 'react';
import DifEventoNativoSintetico from './DifEventoNativoSintetico';
import './eventos.css';

class PersistenciaEventos extends Component{

    state = {
        color: 'blue'
    }

    cambioEventos = (evento) => {
        console.log(evento.target.value);

        this.setState(state => ({
            color: evento.target.value
        }))
    }

    render(){
        return(
            <div>
                <div className="conservarEventos">
                <input type="text"
                onChange={this.cambioEventos} />
                </div>
                <div>
                    <h1 style={{
                        color: this.state.color
                    }}>
                        {this.state.color}
                    </h1>
                </div>
            </div>

        )
    }
}


export default PersistenciaEventos;