import React from "react";
import styled from "styled-components";

const TitleInput = ({ title, titleRef, onChange }) => {
  return (
    <Input
      ref={titleRef}
      value={title}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const Input = styled.input.attrs({
  placeholder: "미라클 모닝 제목을 입력해주세요",
})`
  font-family: "Amsterdam";
  font-weight: bolder;
  font-size: 20px;

  box-sizing: border-box;
  width: 100%;
  resize: vertical;

  border: none;
  border-radius: 15px;
  background-color: ${(props) => props.theme.palette["border"]};
  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};

  padding: 20px;
`;
export default TitleInput;
