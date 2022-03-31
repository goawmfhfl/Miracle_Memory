import React from "react";
import styled from "styled-components";

const SubTitle = ({ text }) => {
  return <Text>{text}</Text>;
};
const Text = styled.h4`
  display: flex;
  align-items: flex-end;
  font-size: 22px;
`;

export default SubTitle;
