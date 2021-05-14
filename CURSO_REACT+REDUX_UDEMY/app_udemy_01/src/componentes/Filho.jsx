import React from 'react'

let lugar = 'Club'

export default (props) => 
    <div>
        <button onClick={() => props.resposta(lugar)}>Posso sair para {lugar}?</button>
    </div>
