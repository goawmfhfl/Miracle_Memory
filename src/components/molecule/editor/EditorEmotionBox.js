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
      <CommonText color={"#000"}>{emotion_descript}</CommonText>
    </EmotionBox>
  );
};
const EmotionBox = styled.li`
  @media (min-width: 390px) and (max-width: 600px) {
    width: 100%;
    margin: 0 1.5%;
    padding: 3%;
  }
  @media (min-width: 600px) {
    width: 110px;
    height: 120px;
  }
  cursor: pointer;
  border: 3px solid ${(props) => props.theme.palette["box"]};
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};
  background-color: ${(props) => props.theme.palette["box"]};

  &.on_1 {
    border: 3px solid ${(props) => props.theme.palette["main"]};
    box-shadow: ${(props) => props.theme.shadow["mainShadow"]};
  }
  &.on_2 {
    border: 3px solid ${(props) => props.theme.palette["main"]};
    box-shadow: ${(props) => props.theme.shadow["mainShadow"]};
  }
  &.on_3 {
    border: 3px solid ${(props) => props.theme.palette["main"]};
    box-shadow: ${(props) => props.theme.shadow["mainShadow"]};
  }
  &.on_4 {
    border: 3px solid ${(props) => props.theme.palette["main"]};
    box-shadow: ${(props) => props.theme.shadow["mainShadow"]};
  }
  &.on_5 {
    border: 3px solid ${(props) => props.theme.palette["main"]};
    box-shadow: ${(props) => props.theme.shadow["mainShadow"]};
  }
`;

export default EditorEmotionBox;
