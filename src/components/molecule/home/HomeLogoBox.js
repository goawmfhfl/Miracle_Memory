import React from "react";
import styled from "styled-components";
import HomeLogo from "../../atom/logo/HomeLogo";

const HomeLogoBox = () => {
  return (
    <Wrapper>
      <StyledLogo
        logo={process.env.PUBLIC_URL + `/assets/logo/home-logo.svg`}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const StyledLogo = styled(HomeLogo)`
  height: 10px;
`;
export default HomeLogoBox;
