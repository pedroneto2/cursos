import React from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "../todo/todoForm";
import TodoList from "../todo/todoList";
import "../template/custom.css";

export default function Todo() {
  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm />
      <TodoList />
    </div>
  );
}
