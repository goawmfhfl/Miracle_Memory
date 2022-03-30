import React from "react";
import styled from "styled-components";
const DetailEmotionImg = ({ img, id }) => {
  return <EmotionImg className={`emotion_${id}`} src={img} />;
};
export default DetailEmotionImg;

const EmotionImg = styled.img.attrs({ alt: "이모션 이미지" })`
  border-radius: 50%;

  &.emotion_1 {
    box-shadow: 0px 0px 20px #038d05;
  }
  &.emotion_2 {
    box-shadow: 0px 0px 20px #5bb616;
  }
  &.emotion_3 {
    box-shadow: 0px 0px 20px #cfa601;
  }
  &.emotion_4 {
    box-shadow: 0px 0px 20px #f86d28;
  }
  &.emotion_5 {
    box-shadow: 0px 0px 20px #bd131c;
  }
`;
