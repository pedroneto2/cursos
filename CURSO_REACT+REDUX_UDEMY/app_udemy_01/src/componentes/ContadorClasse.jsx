import React from 'react'

export default class Contador extends React.Component {
  
    state = {
    numero: this.props.num
    }
  
    Mudar = (dif) =>{
        this.setState({
            numero: Number(this.state.numero) + Number(dif)
        })
    }

    // Inc = () =>{
    //     this.setState({
    //         numero: Number(this.state.numero)+Number(1)
    //     })
    // }

    // Dec = () =>{
    //     this.setState({
    //         numero: Number(this.state.numero)-Number(1)
    //     })
    // }

    Alterar = (e) => {
        this.setState({
            numero: e.target.value
        })
    }


    render() {
        return(
            <div>
                <input type="number" value={this.state.numero} onChange={this.Alterar}/>
                <h3>Numero: {this.state.numero}</h3>
                <button onClick={()=>this.Mudar(+1)}>Inc</button>
                <button onClick={()=>this.Mudar(-1)}>Dec</button>
                <br />
                <button onClick={()=>this.Mudar(+10)}>Inc+10</button>
                <button onClick={()=>this.Mudar(-10)}>Dec-10</button>
            </div>
        )
    }
}
