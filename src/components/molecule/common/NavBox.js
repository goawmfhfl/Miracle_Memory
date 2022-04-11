import React from "react";
import styled from "styled-components";
import NaviLink from "../../atom/etc/NaviLink";

const NavBox = ({ to, className, text }) => {
  return (
    <Wrapper>
      <NaviLink to={to} className={className}>
        {text}
      </NaviLink>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 84px;
  padding: 10px;
`;

export default NavBox;
