import React from "react";
import { useState } from "react";
import TodoEditorItem from "../organisms/todolist/TodoEditorItem";
import TodoList from "../organisms/todolist/TodoList";

const ToDoListContainer = () => {
  return (
    <div>
      <TodoEditorItem />
      <TodoList />
    </div>
  );
};
export default ToDoListContainer;
