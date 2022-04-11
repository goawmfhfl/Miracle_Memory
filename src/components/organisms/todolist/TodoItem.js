import React from "react";

const TodoItem = ({ id, todos }) => {
  return (
    <div>
      <span>{todos}</span>
    </div>
  );
};
export default TodoItem;
