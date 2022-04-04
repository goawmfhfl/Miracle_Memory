import React from "react";
import styled from "styled-components";
import Logo from "../../atom/logo/Logo";

const HomeLogoBox = () => {
  return (
    <Wrapper>
      <Logo src={process.env.PUBLIC_URL + `/assets/logo/home-logo.svg`} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default HomeLogoBox;
