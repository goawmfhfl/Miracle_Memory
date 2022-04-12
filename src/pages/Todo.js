import React from "react";
import TodoHeader from "../components/organisms/todolist/TodoHeader";
import ToDoListContainer from "../components/template/ToDoListContainer";
import CommonNavigation from "../components/organisms/common/CommonNavigation";

const Todo = () => {
  return (
    <>
      <TodoHeader />
      <ToDoListContainer />
      <CommonNavigation />
    </>
  );
};
export default Todo;
