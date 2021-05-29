import React from "react";
import Grid from "../template/grid";
import IconBut from "../template/IconButton";
import { useDispatch, useSelector } from "react-redux";
import {
  actionChanger,
  actionAdd,
  actionClean,
  actionRefresh,
} from "./actions";

function keyUp(e, app, dispatch) {
  if (e.key === "Enter") {
    e.shiftKey
      ? dispatch(actionRefresh(app.description))
      : dispatch(actionAdd(app.description));
  } else if (e.key === "Escape") {
    dispatch(actionClean());
  }
}

export default function todoForm() {
  const app = useSelector((state) => state.app);

  const dispatch = useDispatch();

  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          input="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          onChange={(e) => dispatch(actionChanger(e))}
          value={app.description}
          onKeyUp={(e) => keyUp(e, app, dispatch)}
        />
      </Grid>
      <Grid cols="12 3 2">
        <IconBut
          style="primary"
          icon="plus"
          onClick={() => dispatch(actionAdd(app.description))}
        />
        <IconBut
          style="info"
          icon="search"
          onClick={() => dispatch(actionRefresh(app.description))}
        />
        <IconBut
          hide={app.description ? false : true}
          style="default"
          icon="close"
          onClick={() => dispatch(actionClean())}
        />
      </Grid>
    </div>
  );
}
