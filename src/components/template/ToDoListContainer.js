import React from "react";
import styled from "styled-components";
import TodoTitle from "../organisms/todolist/TodoTitle";
import TodoList from "../organisms/todolist/TodoList";
import TodoEditorItem from "../organisms/todolist/TodoEditorItem";

const ToDoListContainer = () => {
  return (
    <Article>
      <TodoTitle />
      <TodoEditorItem />
      <TodoList />
    </Article>
  );
};

const Article = styled.article`
  & > section {
    margin-top: 30px;
  }
`;
export default ToDoListContainer;
