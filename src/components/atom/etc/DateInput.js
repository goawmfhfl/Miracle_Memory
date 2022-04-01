import React from "react";
import styled from "styled-components";

const DateInput = ({ date, onChange }) => {
  return <Input value={date} onChange={(e) => onChange(e.target.value)} />;
};

const Input = styled.input.attrs({ type: "date" })`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.palette["border"]};
  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  cursor: pointer;
  font-size: 20px;

  font-family: "Amsterdam";
  font-weight: bolder;
`;
export default DateInput;
