import React from "react";
import styled from "styled-components";

const Content = ({ content }) => {
  return <Text>{content}</Text>;
};

const Text = styled.p`
  padding: 20px;
  text-align: left;
  border-radius: 5px;
  font-size: 20px;

  font-family: "Amsterdam";
  font-weight: bolder;

  line-height: 2.5;
`;
export default Content;
