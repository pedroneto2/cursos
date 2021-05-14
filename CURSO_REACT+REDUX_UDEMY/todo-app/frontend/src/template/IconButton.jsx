import React from "react";
import If from "./if";

/*
export default (props) =>
  props.hide ? null : (
    <button className={`btn btn-${props.style}`} onClick={props.onClick}>
      <i className={`fa fa-${props.icon}`}></i>
    </button>
  );

  EU ACHO MAIS SIMPLES FAZER ASSIM, MAS TEM COMO FAZER UM COMPONENTE
  PRA ESSE TESTE DO IF
*/

export default (props) => (
  <If test={props.hide}>
    <button className={`btn btn-${props.style}`} onClick={props.onClick}>
      <i className={`fa fa-${props.icon}`}></i>
    </button>
  </If>
);
