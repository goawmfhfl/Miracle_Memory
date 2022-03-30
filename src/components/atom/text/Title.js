import React from "react";
import styled from "styled-components";

const Title = ({ text }) => {
  return <Text>{text}</Text>;
};
const Text = styled.h1`
  width: 50%;
  font-size: 20px;
  justify-content: center;
`;
export default Title;
