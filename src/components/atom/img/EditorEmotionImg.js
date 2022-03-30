import React from "react";
import styled from "styled-components";

const EditorEmotionImg = ({ img }) => {
  return <EmotionImg src={img} />;
};

const EmotionImg = styled.img.attrs({
  alt: "이모션 이미지",
})`
  width: 50%;
  margin-bottom: 10px;
`;
export default EditorEmotionImg;
