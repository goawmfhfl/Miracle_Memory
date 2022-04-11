import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { removeTodos, editTodos } from "../../../module/todoListReducer";

const TodoItem = ({ id, todoItem }) => {
  const dispatch = useDispatch();
  const localContentInput = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(todoItem);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleRemove = (targetId) => {
    if (window.confirm(`${targetId} 번째 삭제하실껀가요?`)) {
      dispatch(removeTodos(targetId));
    }
  };
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(todoItem);
  };

  const handleEdit = () => {
    if (localContent.length < 1) {
      localContentInput.current.focus();
    }
    if (window.confirm("수정하실건가요?")) {
      dispatch(editTodos(id, localContent));
      toggleIsEdit();
    }
  };

  return (
    <div>
      {isEdit ? (
        <textarea
          ref={localContentInput}
          value={localContent}
          onChange={(e) => setLocalContent(e.target.value)}
        />
      ) : (
        <span>{todoItem}</span>
      )}
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};
export default TodoItem;
