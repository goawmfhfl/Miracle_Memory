import styled from "styled-components";

const HomeSplashImg = () => {
  return (
    <SplashImg src={process.env.PUBLIC_URL + `/assets/logo/splash-logo.svg`} />
  );
};

const SplashImg = styled.img`
  width: 100%;
  height: 100%;
`;
export default HomeSplashImg;
