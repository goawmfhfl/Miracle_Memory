import React from "react";
import styled from "styled-components";
import Logo from "../../atom/logo/Logo";

const TodoHeader = () => {
  return (
    <Header>
      <StyledLogo src={process.env.PUBLIC_URL + `/assets/icon/logo.svg`} />
    </Header>
  );
};

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.palette["border"]};
`;

const StyledLogo = styled(Logo)``;

export default TodoHeader;
