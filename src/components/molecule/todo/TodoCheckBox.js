import React from "react";
import CheckBox from "../../atom/etc/CheckBox";

const TodoCheckBox = ({ checkedItemHandler }) => {
  const checkHandler = (target) => {
    checkedItemHandler(target);
  };

  return (
    <div>
      <CheckBox onChange={checkHandler} />
    </div>
  );
};

export default TodoCheckBox;
