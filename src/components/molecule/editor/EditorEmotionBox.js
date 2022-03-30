import React from "react";
import styled from "styled-components";
import EditorEmotionImg from "../../atom/img/EditorEmotionImg";
import CommonText from "../../atom/text/CommonText";

const EditorEmotionBox = ({
  emotion_descript,
  emotion_id,
  emotion_img,
  isSelected,
  onClick,
}) => {
  return (
    <EmotionBox
      onClick={() => onClick(emotion_id)}
      className={isSelected ? `on_${emotion_id}` : "off"}
    >
      <EditorEmotionImg img={emotion_img} />
      <CommonText descript={emotion_descript} mt={10} color={"#000"} />
    </EmotionBox>
  );
};
const EmotionBox = styled.li`
  cursor: pointer;

  border-radius: 5px;
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.off {
    background-color: #ececec;
  }
  &.on_1 {
    background-color: #63c964;
    color: white;
  }
  &.on_2 {
    background-color: #9dd772;
    color: white;
  }
  &.on_3 {
    background-color: #fdce17;
    color: white;
  }
  &.on_4 {
    background-color: #fd8446;
    color: white;
  }
  &.on_5 {
    background-color: #fd565f;
    color: white;
  }
`;

export default EditorEmotionBox;
