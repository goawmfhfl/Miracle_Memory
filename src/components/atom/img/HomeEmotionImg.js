import React from "react";
import styled from "styled-components";
const HomeEmotionImg = ({ emotion }) => {
  return <EmotionImg src={emotion} />;
};

const EmotionImg = styled.img.attrs((props) => ({
  alt: "이모션 이미지",
  src: process.env.PUBLIC_URL + `assets/emotion${props.src}.png`,
}))``;
export default HomeEmotionImg;
