import React from "react";
import styled from "styled-components";

const Icon = ({ icon, mr }) => {
  return <Img src={icon} mr={mr} />;
};

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: ${(props) => props.mr && props.mr};
`;

export default Icon;
