import React from "react";
import styled from "styled-components";
import TodoEditorItem from "../organisms/todolist/TodoEditorItem";
import TodoList from "../organisms/todolist/TodoList";

const ToDoListContainer = () => {
  return (
    <Article>
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
