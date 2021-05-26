import React, { useState } from "react";
import Campo from "../components/campo";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import campoReducer from "../components/campoReducer";
import Contador from "../components/contador";
import contadorReducer from "../components/contadorReducer";

const reducers = combineReducers({
  campo: campoReducer,
  contador: contadorReducer,
});

export default (props) => {
  return (
    <Provider store={createStore(reducers)}>
      <div>
        <Campo />
      </div>
      <div>
        <Contador />
      </div>
    </Provider>
  );
};
