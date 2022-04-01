import React from "react";
import styled from "styled-components";

const SubTitle = ({ text }) => {
  return <Text>{text}</Text>;
};
const Text = styled.h4`
  display: flex;
  align-items: center;
  font-size: 20px;

  font-family: "MaruBuri-Bold";
`;

export default SubTitle;
