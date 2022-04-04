import React from "react";
import styled from "styled-components";
import HomeSplashBox from "../../molecule/home/HomeSplashBox";
const SplashItem = ({ visible }) => {
  return (
    <Wrapper>
      <HomeSplashBox visible={visible} />
    </Wrapper>
  );
};

const Wrapper = styled.article``;

export default SplashItem;
