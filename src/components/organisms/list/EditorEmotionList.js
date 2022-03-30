import React from "react";
import styled from "styled-components";
import emotionList from "../../../util/emotionList";
import EditorEmotionBox from "../../molecule/box/EditorEmotionBox";

const EditorEmotionList = ({ emotion, onClick }) => {
  return (
    <Wrapper>
      {emotionList &&
        emotionList.map((list) => (
          <EditorEmotionBox
            key={list.emotion_id}
            {...list}
            onClick={onClick}
            isSelected={list.emotion_id === emotion}
          />
        ))}
    </Wrapper>
  );
};
const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 2%;
`;

export default EditorEmotionList;
