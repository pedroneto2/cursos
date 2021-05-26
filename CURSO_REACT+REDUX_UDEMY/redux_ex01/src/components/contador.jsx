import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { contadorClickButton } from "./contadorClickButtonAction";
import { changeContadorInput } from "./contadorchangeContadorInput";

function contador(props) {
  return (
    <div>
      <h1>{props.contador.valor}</h1>
      <label>Incremento/Decremento:</label>
      <input
        type="number"
        value={props.contador.inputValue}
        onChange={props.changeContadorInput}
      />
      <button onClick={props.contadorClickButton}>+/-</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    contador: state.contador, // aqui eu posso referenciar o contador para o state.contador que possui os valores { value, inputValue} dai no componente eu chamo props.contador....
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { contadorClickButton, changeContadorInput },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(contador);
