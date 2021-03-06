import React from "react";
import styled from "styled-components";
import Option from "../../atom/etc/Option";
const HomeSelectBox = ({ value, onChange, optionList }) => {
  return (
    <SelectBox value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList &&
        optionList.map((list, index) => (
          <Option key={index} value={list.value}>
            {list.name}
          </Option>
        ))}
    </SelectBox>
  );
};

const SelectBox = styled.select`
  width: 50%;
  margin-right: 10px;
  border: none;
  border-radius: 15px;
  background-color: #ececec;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;

  cursor: pointer;
  font-family: "Amsterdam";
  font-weight: bolder;
  font-size: 20px;

  @media (min-width: 360px) and (max-width: 600px) {
    padding-left: 10px;
    font-size: 14px;
  }
`;
export default HomeSelectBox;
