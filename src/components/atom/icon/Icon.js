import React from "react";
import styled from "styled-components";

const Icon = ({ icon }) => {
  return <Img src={icon} />;
};

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

export default Icon;
