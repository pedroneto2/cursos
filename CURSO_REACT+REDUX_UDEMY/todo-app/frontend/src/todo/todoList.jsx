import React from "react";
import IconButton from "../template/IconButton";

export default (props) => {
  const renderRows = () => {
    const list = props.list || [];
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
                props.handleAddAsDone(props.setState, todoKey, props.state)
              }
            />
            <IconButton
              style="warning"
              icon="undo"
              hide={!todoKey.done}
              onClick={() =>
                props.handleMarkAsPending(props.setState, todoKey, props.state)
              }
            />
            <IconButton
              style="danger"
              icon="trash-o"
              onClick={() =>
                props.handleRemove(props.setState, todoKey, props.state)
              }
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
