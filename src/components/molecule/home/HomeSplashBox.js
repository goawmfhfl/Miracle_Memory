import React from "react";
import styled, { keyframes } from "styled-components";
import HomeSplashImg from "../../atom/img/HomeSplashImg";

const HomeSplashBox = ({ loading }) => {
  return (
    <SplashImgWrapper className={loading && "up"}>
      <HomeSplashImg />
    </SplashImgWrapper>
  );
};

const slideup = keyframes`
from{
  transform:translateY(15rem)
}
to{
  transform:translateY(-5rem)
}
`;

const SplashImgWrapper = styled.div`
  width: 100%;
  height: 100%;

  &.up {
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-name: ${slideup};
    animation-fill-mode: forwards;
  }
`;
export default HomeSplashBox;
