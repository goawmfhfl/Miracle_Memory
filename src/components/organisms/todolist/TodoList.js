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
const Wrapper = styled.section``;

TodoList.defaultProps = {
  todos: [],
};
export default TodoList;
