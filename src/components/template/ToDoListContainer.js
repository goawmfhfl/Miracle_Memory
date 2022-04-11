import React from "react";
import { useState } from "react";
import TodoEditor from "../organisms/todolist/TodoEditor";
import TodoList from "../organisms/todolist/TodoList";

// const dummyList = [
//   { id: 1, todos: "해야할 일", done: false },
//   { id: 2, todos: "절대 포기하지 않기", done: false },
//   { id: 3, todos: "나는 어떻게든 해낸다는 사실 잊지 않기", done: true },
// ];

const ToDoListContainer = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState(0);

  const onCreate = (text) => {
    const newTodos = [{ id: state, todos: text }];
    setState(state + 1);
    setData([...data, newTodos]);
  };
  return (
    <div>
      <TodoEditor />
      <TodoList dummyList={[]} />
    </div>
  );
};
export default ToDoListContainer;
