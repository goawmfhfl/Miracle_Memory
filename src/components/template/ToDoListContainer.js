import React from "react";
import { useState } from "react";
import TodoEditor from "../organisms/todolist/TodoEditor";
import TodoList from "../organisms/todolist/TodoList";

const ToDoListContainer = () => {
  return (
    <div>
      <TodoEditor />
      <TodoList />
    </div>
  );
};
export default ToDoListContainer;
