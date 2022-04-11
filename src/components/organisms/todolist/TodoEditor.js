import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createTodos } from "../../../module/todoListReducer";

const TodoEditor = () => {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState("");
  const todosRef = useRef();

  const handleChangeValue = (e) => {
    setTodos(e.target.value);
  };
  const handleSubmit = () => {
    if (todos.length < 1) {
      todosRef.current.focus();
      return;
    }
    alert("저장성공");
    dispatch(createTodos(todos));
    setTodos("");
  };

  return (
    <>
      <h2>오늘의 일기</h2>
      <div>
        <input ref={todosRef} value={todos} onChange={handleChangeValue} />
        <button onClick={handleSubmit}>입력 버튼</button>
      </div>
    </>
  );
};
export default TodoEditor;
