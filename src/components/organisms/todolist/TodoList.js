import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ dummyList }) => {
  return (
    <div>
      <h2>일기 리스트</h2>
      <h4>{dummyList.length}개의 일기가 있습니다.</h4>
      <div>
        {dummyList.map((todos) => (
          <TodoItem key={todos.id} {...todos} />
        ))}
      </div>
    </div>
  );
};

TodoList.defaultProps = {
  dummyList: [],
};
export default TodoList;
