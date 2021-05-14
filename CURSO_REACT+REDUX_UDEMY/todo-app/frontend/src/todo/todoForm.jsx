import React from "react";
import Grid from "../template/grid";
import IconBut from "../template/IconButton";

function keyUp(e, props) {
  if (e.key === "Enter") {
    e.shiftKey ? props.handleAdd() : props.handleSearch();
  } else if (e.key === "Escape") {
    props.handleClean();
  }
}

export default (props) => (
  <div role="form" className="todoForm">
    <Grid cols="12 9 10">
      <input
        input="description"
        className="form-control"
        placeholder="Adicione uma tarefa"
        onChange={props.changer}
        value={props.valor}
        onKeyUp={(e) => keyUp(e, props)}
      />
    </Grid>
    <Grid cols="12 3 2">
      <IconBut style="primary" icon="plus" onClick={props.handleAdd} />
      <IconBut style="info" icon="search" onClick={props.handleSearch} />
      <IconBut
        hide={props.hide}
        style="default"
        icon="close"
        onClick={props.handleClean}
      />
    </Grid>
  </div>
);
