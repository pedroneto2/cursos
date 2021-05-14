import React from "react";

export default (props) => (
  <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">
          <i className="fa fa-calendar-check-o"></i> To Do App
        </a>
      </div>
      <div className="navbar navbar-light bg-dark">
        <ul className="nav navbar-text">
          <li className="nav-item">
            <a className="nav-link nav-link" href="#/todos">
              Tarefas
            </a>
          </li>
          <li>
            <a className="nav-link" href="#/about">
              Sobre
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
