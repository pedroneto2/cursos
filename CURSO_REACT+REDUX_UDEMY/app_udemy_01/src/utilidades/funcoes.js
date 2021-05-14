import React from 'react'

export function paiprafilhoProps(props){
    return(
    React.Children.map(props.children,child =>
        React.cloneElement(child,{...props}))
    )
    }