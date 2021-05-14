import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/PrimeiroComponente'
//import {CompA, CompB as B} from './componentes/DoisComponentes'
// import Multiplos from './componentes/MultiplosElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import Contador from './componentes/ContadorClasse'
import ContadorHooks from './componentes/ContadorHooks'

ReactDOM.render(
    <div>
        {/* <Primeiro valor = "Bom dia!" aBcD = {3} /> */}
        {/* <CompA valor="Componente A aqui!" />
        <B valor = "Componente B na area!" /> */}
        {/* <Multiplos /> */}
        {/* <FamiliaSilva /> */}
         {/* <Familia sobrenome="Pereira">
            <Membro nome="Joaquim"/>
            <Membro nome="Paula" />
        </Familia> */}
        {/* <ComponenteComFuncao /> */}
        {/* <Pai /> */}
        {/* <Contador num={3}/> */}
        <ContadorHooks inicial={2}/>
    </div>

    , document.querySelector("#root")
)