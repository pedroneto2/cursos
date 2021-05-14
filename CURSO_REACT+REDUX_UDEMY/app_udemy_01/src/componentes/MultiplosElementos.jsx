import React from 'react'

export default props => [
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>
]

// SOLUCAO 02
// export default props =>
//     <React.Fragment>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </React.Fragment>

// SOLUCAO 01 - Mais utilizada!
// export default props => 
//     <div>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </div>