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
  @media (min-width: 360px) and (max-width: 600px) {
    width: 60px;
  }

  @media (min-width: 600px) {
    width: 84px;
    padding: 6px;
  }
`;

export default NavBox;
