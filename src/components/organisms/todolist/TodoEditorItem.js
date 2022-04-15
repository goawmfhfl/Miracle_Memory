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
          placeholder={"할 일을 입력해 주세요."}
        />
      </LeftCol>
      <RightCol>
        <Button onClick={handleSubmit} type={"positive"}>
          입력
        </Button>
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
