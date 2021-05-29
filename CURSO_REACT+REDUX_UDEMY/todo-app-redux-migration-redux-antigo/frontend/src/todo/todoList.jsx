import React, { useEffect } from "react";
import IconButton from "../template/IconButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  refresh,
  actionMarkAsDone,
  actionMarkAsPending,
  actionRemove,
} from "./actions";

const todoList = (props) => {
  useEffect(() => {
    props.refresh();
  }, []);

  const renderRows = () => {
    const list = props.app.list || [];
    return list.map(
      (
        todoKey // AO INVES DE USAR O INDEX, USAR O TODO._ID QUE SERIA A "KEY"  DE CADA ITEM DO MONGO
      ) => (
        <tr key={todoKey._id}>
          <td className={todoKey.done ? "markedAsDone" : ""}>
            {todoKey.description}
          </td>
          <td>
            <IconButton
              style="success"
              icon="check"
              hide={todoKey.done}
              onClick={() =>
                props.actionMarkAsDone(todoKey, props.app.description)
              }
            />
            <IconButton
              style="warning"
              icon="undo"
              hide={!todoKey.done}
              onClick={() =>
                props.actionMarkAsPending(todoKey, props.app.description)
              }
            />
            <IconButton
              style="danger"
              icon="trash-o"
              onClick={() => props.actionRemove(todoKey)}
            />
          </td>
        </tr>
      )
    );
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descricao</th>
          <th>Acoes</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({ app: state.app });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { refresh, actionMarkAsDone, actionMarkAsPending, actionRemove },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(todoList);
