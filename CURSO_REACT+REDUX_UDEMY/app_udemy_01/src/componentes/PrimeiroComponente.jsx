import React from 'react'

export default (props) =>
    <div>
        <h1>valor = {props.valor}</h1>
        <h2>variavel aBcD = {props.aBcD}</h2>
        <p>1+1 = {1+1}</p>
        <p>Numero randomico = {Math.random()}</p>
    </div>

// export default () =>
//     <div>
//         <h1>Primeiro Componente!</h1>
//     </div>


// export default function(){
//     return(
//         <h1>Primeiro Componente!</h1>
//     )
// }

// function primeiro(){
//     return(
//         <h1>Primeiro Componente!</h1>
//     )
// }

// export default primeiro