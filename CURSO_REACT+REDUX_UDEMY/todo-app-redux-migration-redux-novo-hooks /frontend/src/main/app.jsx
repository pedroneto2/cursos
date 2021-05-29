import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";
import React from "react";
import Menu from "../template/menu";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";

export default () => (
  <Provider store={store}>
    <div className="container">
      <Menu />
      <Routes />
    </div>
  </Provider>
);
