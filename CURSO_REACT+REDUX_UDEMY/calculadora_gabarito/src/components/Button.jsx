import React from 'react'
import './Button.css'

export default function Button(props){
    return(
        <button className={`button ${props.class}`}
                onClick={()=>props.buttonClick()}
        >
            {props.label}
        </button>
    )
}
