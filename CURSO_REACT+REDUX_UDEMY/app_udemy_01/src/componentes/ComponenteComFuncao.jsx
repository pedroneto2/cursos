import React from 'react'

const aprovados = ['Paula','Joao','Maria','Jose']

export default props => {
    return (
        <ul>
            {aprovados.map((p,index) => <li key={index} >{p}</li>)}
        </ul>
    )
}