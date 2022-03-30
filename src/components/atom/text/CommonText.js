import React from "react";
import styled from "styled-components";
const CommonText = ({ descript, size, color, pb }) => {
  return (
    <Text size={size} color={color} pb={pb}>
      {descript}
    </Text>
  );
};

const Text = styled.span`
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => props.color || "#000"};
  padding-bottom: ${(props) => `${props.pb}px` || "0px"};
`;
export default CommonText;
