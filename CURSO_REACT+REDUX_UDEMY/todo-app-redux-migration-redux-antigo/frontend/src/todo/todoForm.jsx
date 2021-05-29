import React from "react";
import Grid from "../template/grid";
import IconBut from "../template/IconButton";
import { formChanger, Add, actionClean, refresh } from "./actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function keyUp(e, props) {
  if (e.key === "Enter") {
    e.shiftKey
      ? props.formAdd(props.app.description)
      : props.refresh(props.app.description);
  } else if (e.key === "Escape") {
    props.actionClean();
  }
}

const todoForm = (props) => (
  <div role="form" className="todoForm">
    <Grid cols="12 9 10">
      <input
        input="description"
        className="form-control"
        placeholder="Adicione uma tarefa"
        onChange={props.formChanger}
        value={props.app.description}
        onKeyUp={(e) => keyUp(e, props)}
      />
    </Grid>
    <Grid cols="12 3 2">
      <IconBut
        style="primary"
        icon="plus"
        onClick={() => props.Add(props.app.description)}
      />
      <IconBut
        style="info"
        icon="search"
        onClick={() => props.refresh(props.app.description)}
      />
      <IconBut
        hide={props.app.description ? false : true}
        style="default"
        icon="close"
        onClick={props.actionClean}
      />
    </Grid>
  </div>
);

const mapStateToProps = (state) => ({ app: state.app });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ formChanger, Add, actionClean, refresh }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(todoForm);
