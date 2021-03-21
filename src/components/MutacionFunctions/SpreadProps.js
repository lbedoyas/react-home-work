import React, { Component } from 'react';

const Gato = (props) => (
    <div>
        <h1>Gato 🐈</h1>
        <pre>
            { JSON.stringify(props, null, 4)}
        </pre>
    </div>
)

class SpreadProps extends Component {

    state = {
        fuerza: 100,
        vidaRestantes: 7,
        name: 'Iris'
    }


    render(){
        const otrosDatos = {
            raza: 'Tropical',
            peleasNocturnas: 300
        }

        return(
            <div>
                <Gato 
                    name='Horus'
                    age= '2 Años'
                    {...otrosDatos}
                    {...this.state}  />
            </div>
        )
    }
}

export default SpreadProps;