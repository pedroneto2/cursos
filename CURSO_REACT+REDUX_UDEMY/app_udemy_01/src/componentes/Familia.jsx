import React from 'react'
import {paiprafilhoProps} from '../utilidades/funcoes'

export default (props) =>{
    <div>
        <h3>Familia {props.sobrenome}</h3>
        {paiprafilhoProps(props)}
        {/* {React.cloneElement(props.children,{...props})}
        Reaalizado para um unico filho */}
        {/* {React.cloneElement(props.children,props)} -> menos usado
        pq referencia as propriedades AO INVES de criar NOVAS PROPRIEDADES
        CLONADAS */}
        <hr />
    </div>
}