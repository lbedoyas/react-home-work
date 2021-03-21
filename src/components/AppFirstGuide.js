import React, { Component } from 'react';

class AppFirstGuide extends Component {
    render(){
        const name = 'Luis Bedoya'
        const user1 = {
            name: 'Luis',
            Age: 34,
            country: 'Colombia'
        }

        function GetInfo(user) {
            return `Hola mi nombre es ${user} y estamos aprendiendo react`
        }

        return(
            <div>
                <h1>El nombre es: {name}</h1>
                <p>la edad es: {user1.Age} y el doble es {user1.Age * 2}</p>
                <p>Aca llamamos una funcion que retorna {GetInfo(name)}</p>
            </div>
        )
    }

}

export default AppFirstGuide;