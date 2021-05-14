import React, { useState } from 'react'
import "./Calculator.css"

import Button from '../components/Button'
import Display from '../components/Display'
//import BUTTONCONFIG from './ButtonConfig' - APRENDER

const initialState = {
    display: "0",
    memory: "",
    clearDisplay: true,
    operation: ""
}

//FUNCOES AUXILIARES - INICIO
function setOperation(op,state){
    let memory = state.memory
    let display = state.display
    let operation = state.operation
    let clearDisplay = state.clearDisplay
    if(memory !== "" && clearDisplay === false) {
        switch (operation){
            default:
                break
                
            case "/":
                display = memory/display  
                break
            
            case "x":
                display = memory*display
                break
            
            case "-":
                display = memory-display
                break

            case "+":
                display = Number(memory)+Number(display)
                break
        }
        clearDisplay = false
    }
    if(display !== '0'){
        operation = op
    }
    if(!clearDisplay){
        memory = display
        clearDisplay = true
    }
    return ({clearDisplay,memory,display,operation})
}

function addDigitOnDisplay(e,state){
    let display = state.display
    if(e === "." && display.includes(".")){
        return
    }
    let clearDisplay = state.clearDisplay
    if((clearDisplay || display === "0")){
        display = ''
        clearDisplay = false
        if(e === "."){
            display += "0"
        }
    }
    display += e
    return({...state,display,clearDisplay})
}
//FUNCOES AUXILIARES - FIM

export default function Calculator() {

    const[state,setState] = useState({ ...initialState})

    const BUTTONCONFIG = [
        {
            label: "AC",
            classN: "buttonAC",
            buttonC: {...initialState},
        },
        {
            label: "/",
            classN: "operadores",
            buttonC: ()=>setOperation("/",state),
        },
        {
            label: "7",
            classN: "",
            buttonC: ()=>addDigitOnDisplay("7",state),
        },
        {
            label: "8",
            classN: "",
            buttonC: ()=>addDigitOnDisplay("8",state),
        },
        {
            label: "9",
            classN: "",
            buttonC: ()=>addDigitOnDisplay("9",state),
        },
        {
            label: "x",
            classN: "operadores",
            buttonC: ()=>setOperation("x",state),
        },
        {
            label: "4",
            classN: "",
            buttonC: ()=>addDigitOnDisplay("4",state),
        },
        {
            label: "5",
            classN: "",
            buttonC: ()=>addDigitOnDisplay("5",state),
        },
        {
            label: "6",
            classN: "",
            buttonC: ()=>addDigitOnDisplay("6",state),
        },
        {
            label: "-",
            classN: "operadores",
            buttonC: ()=>setOperation("-",state),
        },
        {
            label: "1",
            classN: "",
            buttonC: ()=>addDigitOnDisplay("1",state),
        },
        {
            label: "2",
            classN: "",
            buttonC: ()=>addDigitOnDisplay("2",state),
        },
        {
            label: "3",
            classN: "",
            buttonC: ()=>addDigitOnDisplay("3",state),
        },
        {
            label: "+",
            classN: "operadores",
            buttonC: ()=>setOperation("+",state),
        },
        {
            label: "0",
            classN: "buttonZero",
            buttonC: ()=>addDigitOnDisplay("0",state),
        },
        {
            label: ".",
            classN: "",
            buttonC: ()=>addDigitOnDisplay(".",state),
        },
        {
            label: "=",
            classN: "operadores",
            buttonC: ()=>setOperation("=",state),
        },
    ]

        return(
            <div className="calculator">

                <Display display={state.display} />
            
                {BUTTONCONFIG.map((key,index) =>
                (<Button 
                key={index} 
                label={key.label}
                class={key.classN}
                buttonClick={()=>setState(key.buttonC)}
                />))}

            </div>
        )
}
