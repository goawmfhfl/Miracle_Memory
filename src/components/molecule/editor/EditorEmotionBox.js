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

  width: 110px;
  height: 120px;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};
  background-color: ${(props) => props.theme.palette["border"]};

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
