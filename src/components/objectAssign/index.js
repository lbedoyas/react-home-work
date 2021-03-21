import React from 'react';

const EjemploObjectAsign = () => {
    
const perfil = {
    nombre: 'Gerardo',
    info: {
        direccion: 'la direccion ....'
    }
}

const region = {
    pais: 'Colombia',
    info: {
        cordenadas: 'la coordenada ....'
    }
}

const social = {
    twitter: '@algo',
    nombre: 'Lucho'
}

const resultado = Object.assign(
{},
perfil,
region,
social
)

console.log(resultado);
}

export default EjemploObjectAsign;

