import React from "react";
import styled from "styled-components";

const Content = ({ content }) => {
  return <Text>{content}</Text>;
};

const Text = styled.p`
  border-radius: 5px;
  font-size: 20px;
  font-family: "Amsterdam";

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export default Content;
