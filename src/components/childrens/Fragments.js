import React, {Component, Fragment} from 'react';

const Computacion = () => (
    <Fragment>
        <li>Monitor</li>
        <li>Mouse</li>
        <li>Teclado</li>
    </Fragment>
)
const Ropa = () => (
    <Fragment>
        <li>Playera</li>
        <li>Jeans</li>
        <li>Shorts</li>
    </Fragment>
)

// se puede colocar en blanco pero no se puede colocar atributos
const GamaBlanca = () => (
    <>
        <li>Nevera</li>
        <li>Lavadora</li>
        <li>Estufa</li>
    </>
)

class Fragments extends Component{
    render(){
        return(
            <div>
                <Computacion />
                <Ropa />
                <GamaBlanca />
            </div>
        )
    }
}

export default Fragments;