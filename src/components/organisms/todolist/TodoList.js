import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector(({ todoListReducer }) => todoListReducer);

  return (
    <Wrapper>
      {todos && todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
    </Wrapper>
  );
};
const Wrapper = styled.ul`
  overflow-y: auto;
  padding: 10px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.palette["box"]};
  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};

  @media (min-width: 360px) and (max-width: 600px) {
    height: 270px;
  }

  @media (min-width: 600px) {
    height: 670px;
  }
`;

TodoList.defaultProps = {
  todos: [],
};
export default TodoList;
