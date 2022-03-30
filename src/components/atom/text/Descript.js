import React from "react";
import styled from "styled-components";
const Descript = ({ descript, size, color }) => {
  return (
    <Text size={size} color={color}>
      {descript}
    </Text>
  );
};

const Text = styled.span`
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => props.color || "#fff"};
  padding-bottom: 10px;
`;
export default Descript;
