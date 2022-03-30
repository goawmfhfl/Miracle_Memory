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

const InputArea = styled.textarea.attrs({ placeholder: "오늘은 어떠셨나요?" })`
  /* font-family: "Nanum Pen Script", cursive; */
  font-size: 20px;

  box-sizing: border-box;
  width: 100%;
  min-height: 200px;
  resize: vertical;

  border: none;
  border-radius: 5px;
  background-color: #ececec;

  padding: 20px;
`;
export default TextArea;
