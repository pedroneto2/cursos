import React, { useState, useEffect } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "../todo/todoForm";
import TodoList from "../todo/todoList";
import axios from "axios";

const URL = "http://localhost:3003/api/todos";

const initialState = {
  description: "",
  list: [],
};

function handleRemove(setState, todoKey) {
  axios.delete(`${URL}/${todoKey._id}`).then((resp) => refresh(setState));
}

function refresh(setState) {
  axios
    .get(`${URL}?sort=-createdAt`)
    .then((resp) => setState({ description: "", list: resp.data }));
}

function handleAdd(setState, state) {
  const description = state.description;
  axios.post(URL, { description }).then((resp) => refresh(setState));
}

export default function Todo() {
  const [state, setState] = useState({ ...initialState });

  useEffect(() => {
    refresh(setState);
  }, []);

  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm
        handleAdd={() => handleAdd(setState, state)}
        changer={(e) =>
          setState({ ...state, description: e.currentTarget.value })
        }
      />
      <TodoList
        list={state.list}
        handleRemove={handleRemove}
        setState={setState}
      />
    </div>
  );
}
