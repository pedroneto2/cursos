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
          <td>{todoKey.description}</td>
          <td>
            <IconButton
              style="danger"
              icon="trash-o"
              onClick={() => props.handleRemove(props.setState, todoKey)}
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
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
