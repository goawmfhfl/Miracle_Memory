import React from "react";
import styled from "styled-components";
import HomeSplashBox from "../../molecule/home/HomeSplashBox";
const SplashItem = ({ loading }) => {
  return (
    <Wrapper>
      <HomeSplashBox loading={loading} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: center;
  align-items: center;
  height: 100vh;
`;

export default SplashItem;
