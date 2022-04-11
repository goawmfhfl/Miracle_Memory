import React from "react";

const TodoItem = ({ id, todoItem }) => {
  return (
    <div>
      <span>{todoItem}</span>
    </div>
  );
};
export default TodoItem;
