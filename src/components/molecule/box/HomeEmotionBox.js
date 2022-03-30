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
  min-width: 120px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &.emotion_1 {
    background-color: #64c964;
  }
  &.emotion_2 {
    background-color: #9dd772;
  }
  &.emotion_3 {
    background-color: #fdce17;
  }
  &.emotion_4 {
    background-color: #fd8446;
  }
  &.emotion_5 {
    background-color: #fd565f;
  }
`;
export default HomeEmotionBox;
