import React, { Component } from 'react';

class InputOptions extends Component {
    state = {
        text: '',
        evento: ''
    }

    manejador = (event) => {
        console.log(event);
        this.setState({
            text: event.target.value,
            evento: event.type
        })
    }

    render(){
        return (
            <div>
                <input
                type="text"
                onChange={this.manejador}
                onCopy={this.manejador}
                onPaste={this.manejador} />
                <div>
                    <h4>{this.state.text}</h4>
                    <h4>{this.state.evento}</h4>
                </div>
            </div>
            
        )
    }
}

export default InputOptions;