import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { removeTodos, editTodos } from "../../../module/todoListReducer";
import ToDoIconBox from "../../molecule/todo/ToDoIconBox";
import TextArea from "../../atom/etc/TextArea";

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

  const handleLocalContent = (value) => {
    setLocalContent(value);
  };

  return (
    <Wrapper>
      <LeftCol>
        {isEdit ? (
          <StyledTextArea
            reference={localContentInput}
            content={localContent}
            onChange={handleLocalContent}
          />
        ) : (
          <span>{todoItem}</span>
        )}
      </LeftCol>
      {isEdit ? (
        <RightCol>
          <ToDoIconBox
            color={"#000"}
            icon={process.env.PUBLIC_URL + `/assets/icon/cross.svg`}
            onClick={handleQuitEdit}
            mr={10}
          ></ToDoIconBox>
          <ToDoIconBox
            color={(props) => props.theme.palette["main"]}
            icon={process.env.PUBLIC_URL + `/assets/icon/checkmark.svg`}
            onClick={handleEdit}
          ></ToDoIconBox>
        </RightCol>
      ) : (
        <RightCol>
          <ToDoIconBox
            color={(props) => props.theme.palette["main"]}
            icon={process.env.PUBLIC_URL + `/assets/icon/edit.svg`}
            mr={10}
            onClick={toggleIsEdit}
          ></ToDoIconBox>
          <ToDoIconBox
            color={"#000"}
            icon={process.env.PUBLIC_URL + `/assets/icon/delete.svg`}
            onClick={() => handleRemove(id)}
          ></ToDoIconBox>
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

  /* &:hover {
    background-color: ${(props) => props.theme.palette["main"]};
    border: 1px solid rgba(163, 163, 163, 0.35);
    color: #fff;
    span {
      color: #fff;
    }
    button {
      color: #fff;
    }
  } */
`;

const LeftCol = styled.div`
  flex-grow: 1;
  margin-right: 15px;
`;
const RightCol = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledTextArea = styled(TextArea)`
  min-height: 50px;
  padding: 10px;
`;
export default TodoItem;
