import React from "react";
import styled from "styled-components";
import TodoTitle from "../organisms/todolist/TodoTitle";
import TodoList from "../organisms/todolist/TodoList";
import TodoEditorItem from "../organisms/todolist/TodoEditorItem";
import TodoWeatherItem from "../organisms/todolist/TodoWeatherItem";

const ToDoListContainer = () => {
  return (
    <Article>
      <TodoWeatherItem />
      <TodoTitle />
      <TodoEditorItem />
      <TodoList />
    </Article>
  );
};

const Article = styled.article`
  & > section {
    margin-top: 15px;
  }
  & > ul {
    margin-top: 15px;
  }
  @media (min-width: 600px) {
    & > section {
      margin-top: 35px;
    }
    & > ul {
      margin-top: 35px;
    }
  }
`;
export default ToDoListContainer;
