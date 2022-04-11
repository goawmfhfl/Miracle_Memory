import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector(({ todoListReducer }) => todoListReducer);

  return (
    <div>
      <h2>일기 리스트</h2>
      <h4>{todos?.length}개의 일기가 있습니다.</h4>
      <div>
        {todos && todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
      </div>
    </div>
  );
};

TodoList.defaultProps = {
  todos: [],
};
export default TodoList;
