import React from "react";
import styled from "styled-components";
const CommonText = ({ descript, size, color, pb, mt }) => {
  return (
    <Text size={size} color={color} pb={pb} mt={mt}>
      {descript}
    </Text>
  );
};

const Text = styled.span`
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => props.color || "#000"};
  padding-bottom: ${(props) => `${props.pb}px` || "0px"};
  margin-top: ${(props) => `${props.mt}px` || "0px"};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export default CommonText;
