import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { removeTodos, editTodos } from "../../../module/todoListReducer";
import TodoIconBox from "../../molecule/todo/TodoIconBox";
import TodoCheckBox from "../../molecule/todo/TodoCheckBox";
import TodoInputBox from "../../molecule/todo/TodoTextBox";
import TextArea from "../../atom/etc/TextArea";

const TodoItem = ({ id, todoItem }) => {
  const dispatch = useDispatch();
  const localContentInput = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(todoItem);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleRemove = (targetId) => {
    if (window.confirm("삭제하실껀가요?")) {
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

  const handleLocalContent = (value) => {
    setLocalContent(value);
  };

  const [checked, setChecked] = useState(false);
  const checkedItemHandler = (isChecked) => {
    setChecked(isChecked);
  };

  return (
    <Wrapper>
      {isEdit ? (
        <StyledTextArea
          reference={localContentInput}
          content={localContent}
          onChange={handleLocalContent}
        />
      ) : (
        <>
          <LeftCol>
            <TodoCheckBox checkedItemHandler={checkedItemHandler} />
          </LeftCol>
          <CenterCol>
            <TodoInputBox InputValue={todoItem} checked={checked} />
          </CenterCol>
        </>
      )}
      {isEdit ? (
        <RightCol>
          <TodoIconBox
            color={"#000"}
            icon={process.env.PUBLIC_URL + `/assets/icon/cross.svg`}
            onClick={handleQuitEdit}
            mr={10}
          ></TodoIconBox>
          <TodoIconBox
            icon={process.env.PUBLIC_URL + `/assets/icon/checkmark.svg`}
            onClick={handleEdit}
          ></TodoIconBox>
        </RightCol>
      ) : (
        <RightCol>
          <TodoIconBox
            icon={process.env.PUBLIC_URL + `/assets/icon/edit.svg`}
            mr={10}
            onClick={toggleIsEdit}
          ></TodoIconBox>
          <TodoIconBox
            color={"#000"}
            icon={process.env.PUBLIC_URL + `/assets/icon/delete.svg`}
            onClick={() => handleRemove(id)}
          ></TodoIconBox>
        </RightCol>
      )}
    </Wrapper>
  );
};
const fadeIn = keyframes`
from{
  opacity:0
}
to{
  opacity:1
}
`;
const Wrapper = styled.li`
  width: 100%;
  padding: 20px 18px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  border-radius: 15px;
  border: 1px solid #f4f4f4;
  box-shadow: ${(props) => props.theme.shadow["cardShadow"]};

  transition: 0.5s;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const LeftCol = styled.div``;
const CenterCol = styled.div`
  flex-grow: 1;
  justify-content: flex-start;
  padding-left: 20px;
`;
const RightCol = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledTextArea = styled(TextArea)`
  min-height: 50px;
  flex-grow: 1;
  margin-right: 15px;
  padding: 10px;
`;
export default TodoItem;
