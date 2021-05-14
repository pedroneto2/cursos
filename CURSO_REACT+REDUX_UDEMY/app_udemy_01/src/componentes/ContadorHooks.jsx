import React, { useState, useEffect } from 'react'

export default props => {

    const [number,setNumber] = useState(props.inicial)
    const [texto,setTexto] = useState("")

    useEffect(
        ()=>{
            setTexto("ANTES E APOS TODAS EXECUCOES, ESTA PARTE (useEffect) SERA EXECUTADA POR ULTIMO. MUITO UTIL PARA ATUALIZAR ALGO, COMO, POR EXEMPLO, UM ESTADO!")
            console.log("ANTES E APOS TODAS EXECUCOES, ESTA PARTE (useEffect) SERA EXECUTADA POR ULTIMO. MUITO UTIL PARA ATUALIZAR ALGO, COMO, POR EXEMPLO, UM ESTADO!")
        },[texto] // SOH VAI EXECUTAR O USEEFFECT SE A VARIAVEL texto MUDAR
        // ANTES O TEXTO ERA "" E DEPOIS ELE VIROU O TEXTO ALI EM CIMA DENTRO
        //DO setTexto
        //ISSO FEZ COM QUE O TEXTAO ALI FOSSE EXECUTADA 2X no console!
    )
    
    return(
        <div>
            <h2>Contador: {number}</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>setNumber(number+1)}>Inc+1</button>
            <button onClick={()=>setNumber(number-1)}>Dec+1</button>
            <br />
            <button onClick={()=>setNumber(number+10)}>Inc+10</button>
            <button onClick={()=>setNumber(number-10)}>Dec+10</button>
            <br/>
            <h3>{texto}</h3>
        </div>
    )
}