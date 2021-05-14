import React from 'react'
import './Calculator.css'

export default class Calculator extends React.Component{
    
    state = {
        display: "",
        result: "",
        operacao: "",
        num: "",
    }

    AC = () =>{
        this.setState({
            display: "",
            result: "",
            operacao: "",
            num: ""
        })
    }

    Alterar = (a) =>{
        let resquicio
        this.state.operacao!=="" ? resquicio="" : resquicio=this.state.result
        if (this.state.display.indexOf(a)!==-1 && a==="."){return}
        this.setState({
            result: resquicio+a,
            digitou: true
        })
    }

    Calcular = (operation="") => {
        let r = this.state.result
        let n = this.state.num
        if (n!=="" && this.state.digitou === true) {
            switch (this.state.operacao){
                default:
                    break
                case "/":
                    r = n/r
                break
                case "*":
                    r=n*r
                break
                case "-":
                    r=Number(n)-Number(r)
                break
                case "+":
                    r=Number(n)+Number(r)
                break
            }
        }
        n=String(r)
        this.setState({
            num: n,
            result: String(r),
            operacao: operation,
            digitou: false
        })

    }

    render() {
        return (
            <div className="calculator">
                <section id="display">
                    <p className="display">{this.state.result}</p>
                </section>
                <div id='secoes'>
                    <section id="painel">
                        <div id="c1">
                            <p onClick={this.AC}>AC</p>
                        </div>
                        <div id = 'c2'>
                            <p onClick={()=>this.Alterar("7")}>7</p>
                            <p onClick={()=>this.Alterar("8")}>8</p>
                            <p onClick={()=>this.Alterar("9")}>9</p>
                        </div>
                        <div id = 'c3'>
                            <p onClick={()=>this.Alterar("4")}>4</p>
                            <p onClick={()=>this.Alterar("5")}>5</p>
                            <p onClick={()=>this.Alterar("6")}>6</p>
                        </div>
                        <div id = 'c4'>
                            <p onClick={()=>this.Alterar("1")}>1</p>
                            <p onClick={()=>this.Alterar("2")}>2</p>
                            <p onClick={()=>this.Alterar("3")}>3</p>
                        </div>
                        <div id = 'c5'>
                            <p onClick={()=>this.Alterar("0")}>0</p>
                            <p onClick={()=>this.Alterar(".")}>.</p>
                        </div>
                    </section>
                    <section id="operacoes">
                        <p onClick={()=>this.Calcular("/")}><strong>/</strong></p>
                        <p onClick={()=>this.Calcular("*")}><strong>x</strong></p>
                        <p onClick={()=>this.Calcular("-")}><strong>-</strong></p>
                        <p onClick={()=>this.Calcular("+")}><strong>+</strong></p>
                        <p onClick={this.Calcular}><strong>=</strong></p>
                    </section>
                </div>
            </div>
        )
    }
}