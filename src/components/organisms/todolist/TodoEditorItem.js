import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createTodos } from "../../../module/todoListReducer";
import styled from "styled-components";
import TitleInput from "../../atom/etc/TitleInput";
import Button from "../../atom/etc/Button";

const TodoEditorItem = () => {
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
    <Wrapper>
      <ToDoInput
        titleRef={todosRef}
        title={todos}
        onChange={handleChangeValue}
      />
      <ToDoButton onClick={handleSubmit} text={"입력"} type={"positive"} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
`;

const ToDoInput = styled(TitleInput)`
  width: 50%;
`;
const ToDoButton = styled(Button)``;
export default TodoEditorItem;
