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

  const handleChangeValue = (value) => {
    setTodos(value);
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
      <LeftCol>
        <TitleInput
          titleRef={todosRef}
          title={todos}
          onChange={handleChangeValue}
        />
      </LeftCol>
      <RightCol>
        <Button onClick={handleSubmit} text={"입력"} type={"positive"} />
      </RightCol>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const LeftCol = styled.div`
  flex-grow: 1;
  margin-right: 15px;
`;
const RightCol = styled.div``;

export default TodoEditorItem;
