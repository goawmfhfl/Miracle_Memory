import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTodos } from "../../../module/todoListReducer";

const TodoEditor = () => {
  const dispatch = useDispatch();
  const Lists = useSelector((state) => console.log(state));
  console.log(Lists);
  const [todos, setTodos] = useState("");
  const todosRef = useRef();

  const handleChangetodos = (e) => {
    setTodos(e.target.value);
  };
  const handleSubmit = (e) => {
    if (todos.length < 1) {
      todosRef.current.focus();
      return;
    }
    alert("저장성공");
    dispatch(createTodos(todos));
  };

  return (
    <>
      <h2>오늘의 일기</h2>
      <div>
        <input ref={todosRef} value={todos} onChange={handleChangetodos} />
        <button onClick={handleSubmit}> 입력 버튼 </button>
      </div>
    </>
  );
};
export default TodoEditor;
