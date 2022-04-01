import React from "react";
import styled from "styled-components";
import Option from "../../atom/etc/Option";
const HomeSelectBox = ({ value, onChange, optionList }) => {
  return (
    <SelectBox value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList &&
        optionList.map((list, index) => (
          <Option key={index} value={list.value} name={list.name} />
        ))}
    </SelectBox>
  );
};

const SelectBox = styled.select`
  margin-right: 10px;
  border: none;
  border-radius: 15px;
  background-color: #ececec;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 15px;

  cursor: pointer;
  font-family: "Amsterdam";
  font-weight: bolder;
  font-size: 18px;
`;
export default HomeSelectBox;
