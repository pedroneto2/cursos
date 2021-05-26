import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeValue } from "./campoActions";

function functionCampo(props) {
  return (
    <div>
      <label>{props.value}</label>
      <br />
      <input type="text" value={props.value} onChange={props.changeValue} />
    </div>
  );
}

function mapStateToProps(state) {
  //mapea o estado(state) para as propriedades(props)
  return {
    value: state.campo.resultado,
  };
}

function mapDispatchToProps(dispatch) {
  //mapea as acoes (actions) para as propriedades(props)
  return bindActionCreators({ changeValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(functionCampo);
