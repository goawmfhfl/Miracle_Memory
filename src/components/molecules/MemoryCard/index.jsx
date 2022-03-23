import React from "react";
import {
  MemoryItem,
  EmotionImgWrapper,
  EmotionImg,
  InfoWrapper,
  MemoryDate,
  MemoryContentPreview,
  BtnWrapper,
} from "./index.style";

const MemoryCard = () => {
  return (
    <MemoryItem>
      <EmotionImgWrapper>
        <EmotionImg />
      </EmotionImgWrapper>
      <InfoWrapper>
        <MemoryDate></MemoryDate>
        <MemoryContentPreview></MemoryContentPreview>
      </InfoWrapper>
      <BtnWrapper></BtnWrapper>
    </MemoryItem>
  );
};
export default MemoryCard;
