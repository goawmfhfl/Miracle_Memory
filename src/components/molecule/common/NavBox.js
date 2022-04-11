import React from "react";
import styled from "styled-components";
import NavLink from "../../atom/etc/NavLink";

const NavBox = ({ to, className }) => {
  return (
    <Wrapper>
      <NavLink />
    </Wrapper>
  );
};

const Wrapper = styled.li``;

export default NavBox;
