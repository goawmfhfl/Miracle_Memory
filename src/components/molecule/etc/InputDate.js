import React from "react";
import styled from "styled-components";

const InputDate = ({ date, onChange }) => {
  return (
    <InputBox>
      <InputCalendar value={date} onChange={(e) => onChange(e.target.value)} />
    </InputBox>
  );
};

const InputBox = styled.div``;
const InputCalendar = styled.input.attrs({ type: "date" })`
  border: none;
  border-radius: 5px;
  background-color: #ececec;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  cursor: pointer;
  font-family: "Nanum Pen Script", cursive;
  font-size: 20px;
`;
export default InputDate;
