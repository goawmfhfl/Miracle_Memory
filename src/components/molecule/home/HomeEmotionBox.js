import React from "react";
import styled from "styled-components";
import HomeEmotionImg from "../../atom/img/HomeEmotionImg";
const HomeEmotionBox = ({ onClick, emotion }) => {
  return (
    <Wrapper className={`emotion_${emotion}`} onClick={onClick}>
      <HomeEmotionImg emotion={emotion} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  min-width: 60px;
  height: 60px;

  box-sizing: content-box;
  padding: 5px;
  border-radius: 15px;

  display: flex;
  justify-content: center;
`;
export default HomeEmotionBox;
