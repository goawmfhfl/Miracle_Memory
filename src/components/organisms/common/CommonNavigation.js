import React from "react";
import styled from "styled-components";
import NavBox from "../../molecule/common/NavBox";

const CommonNavigation = () => {
  return (
    <Wrapper>
      <NavBox to={"/"} className={"home"} text={"홈"} />
      <NavBox to={"/new"} className={"upload"} text={"작성"} />
      <NavBox to={"/todo"} className={"todo"} text={"할 일"} />
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  position: fixed;

  bottom: 0;
  right: 0;
  left: 0;

  background-color: #fff;
  padding: 0 16px;
  border-top: 1px solid ${(props) => props.theme.palette["border"]};
  z-index: 10;
`;

export default CommonNavigation;
