import React from "react";
import styled from "styled-components";
import NavBox from "../../molecule/common/NavBox";

const CommonNavigation = () => {
  return (
    <Wrapper>
      <NavBox to={""} className={""} />
      <NavBox to={""} className={""} />
      <NavBox to={""} className={""} />
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
  border-top: 0.5px solid #fff;
  z-index: 10;
`;
export default CommonNavigation;
