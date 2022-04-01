import React from "react";
import styled from "styled-components";
const TextArea = ({ content, onChange, reference }) => {
  return (
    <InputArea
      ref={reference}
      value={content}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const InputArea = styled.textarea.attrs({
  placeholder: "오늘의 미라클 모닝을 기록해보세요",
})`
  font-family: "Amsterdam";
  font-weight: bolder;
  font-size: 20px;

  box-sizing: border-box;
  width: 100%;
  min-height: 200px;
  resize: vertical;

  border: none;
  border-radius: 15px;
  background-color: ${(props) => props.theme.palette["border"]};
  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};

  padding: 20px;
`;
export default TextArea;
