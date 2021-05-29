import React, { useEffect } from "react";
import IconButton from "../template/IconButton";
import { useDispatch, useSelector } from "react-redux";
import {
  actionRefresh,
  actionMarkAsDone,
  actionMarkAsPending,
  actionRemove,
} from "./actions";

export default function todoList() {
  const app = useSelector((state) => state.app);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionRefresh());
  }, []);

  const renderRows = () => {
    const list = app.list || []; //se app.lista nao for TRUE, list sera uma lista vazia
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
                dispatch(actionMarkAsDone(todoKey, app.description))
              }
            />
            <IconButton
              style="warning"
              icon="undo"
              hide={!todoKey.done}
              onClick={() =>
                dispatch(actionMarkAsPending(todoKey, app.description))
              }
            />
            <IconButton
              style="danger"
              icon="trash-o"
              onClick={() => dispatch(actionRemove(todoKey))}
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
}
