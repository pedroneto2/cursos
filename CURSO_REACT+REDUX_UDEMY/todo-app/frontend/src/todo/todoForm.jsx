import React from "react";
import Grid from "../template/grid";
import IconBut from "../template/IconButton";

export default (props) => (
  <div role="form" className="todoForm">
    <Grid cols="12 9 10">
      <input
        input="description"
        className="form-control"
        placeholder="Adicione uma tarefa"
        onChange={props.changer}
      />
    </Grid>
    <Grid cols="12 3 2">
      <IconBut style="primary" icon="plus" onClick={props.handleAdd} />
    </Grid>
  </div>
);
