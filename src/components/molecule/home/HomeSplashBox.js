import React from "react";
import styled, { keyframes } from "styled-components";
import HomeSplashImg from "../../atom/img/HomeSplashImg";

const HomeSplashBox = ({ visible }) => {
  return (
    <SplashImgWrapper className={visible ? "up" : "down"}>
      <HomeSplashImg />
    </SplashImgWrapper>
  );
};

const fadeIn = keyframes`
from{
  opacity:0
}
to{
  opacity:1
}
`;

const fadeOut = keyframes`
from{
  opacity:1
}
to{
  opacity:0
}
`;

const SplashImgWrapper = styled.div`
  width: 100%;
  height: 100%;

  &.up {
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
  }
  &.down {
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-name: ${fadeOut};
    animation-fill-mode: forwards;
  }
`;
export default HomeSplashBox;
