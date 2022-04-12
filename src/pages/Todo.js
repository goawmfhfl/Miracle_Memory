import React from "react";
import TodoHeader from "../components/organisms/todolist/TodoHeader";
import TodoWeatherItem from "../components/organisms/todolist/TodoWeatherItem";
import ToDoListContainer from "../components/template/ToDoListContainer";
import CommonNavigation from "../components/organisms/common/CommonNavigation";

const Todo = () => {
  return (
    <>
      <TodoHeader />
      <TodoWeatherItem />
      <ToDoListContainer />
      <CommonNavigation />
    </>
  );
};

export default Todo;
