import React from 'react';

const Saludo = (props) => {
    if (props.saluda) {
        return(
            <div>
                <div>
                    { props.name && <strong>{props.name}</strong>}
                </div>
                <div>
                    {props.saluda ? ( <h1>Hola es true</h1>) : ( <p>Wops, No hay saludos para ti</p>)}
                </div>
            </div>
        )
        // return(
        //     <div>
        //         <hr/>
        //         <h1>Hola es true</h1>
        //     </div>
        // )
    }
    return (
        <p>Wops, No hay saludos para ti</p>
    )
}

const RenderizadosCondicionales = () => {
    return (
        <div>
            <Saludo saluda={true} name='luis' />
        </div>
    )
}

export default RenderizadosCondicionales;