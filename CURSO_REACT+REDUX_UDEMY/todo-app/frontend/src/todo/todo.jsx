import React, { useState, useEffect } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "../todo/todoForm";
import TodoList from "../todo/todoList";
import axios from "axios";
import "../template/custom.css";

const URL = "http://localhost:3003/api/todos";

const initialState = {
  description: "",
  list: [],
};

function handleRemove(setState, todoKey, state) {
  axios
    .delete(`${URL}/${todoKey._id}`)
    .then((resp) => refresh(setState, state.description));
}

function refresh(setState, desc = "") {
  console.log(desc);
  const search = desc ? `&description__regex=/${desc}/` : "";
  axios
    .get(`${URL}?sort=-createdAt${search}`)
    .then((resp) => setState({ description: desc, list: resp.data }));
}

function handleAdd(setState, state) {
  const description = state.description;
  axios.post(URL, { description }).then((resp) => refresh(setState));
}

function handleAddAsDone(setState, todoKey, state) {
  axios
    .put(`${URL}/${todoKey._id}`, { ...todoKey, done: true })
    .then((resp) => refresh(setState, state.description));
}

function handleMarkAsPending(setState, todoKey, state) {
  axios
    .put(`${URL}/${todoKey._id}`, { ...todoKey, done: false })
    .then((resp) => refresh(setState, state.description));
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
        handleSearch={() => refresh(setState, state.description)}
        handleClean={() => refresh(setState)}
        hide={state.description ? false : true}
        valor={state.description}
      />
      <TodoList
        list={state.list}
        handleRemove={handleRemove}
        handleAddAsDone={handleAddAsDone}
        handleMarkAsPending={handleMarkAsPending}
        setState={setState}
        state={state}
      />
    </div>
  );
}
