import React from "react";
import styled from "styled-components";
import emotionList from "../../../util/emotionList";
import EditorEmotionBox from "../../molecule/editor/EditorEmotionBox";

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
  display: flex;
  justify-content: space-around;
  width: 100%;
  /* 600픽셀 이상 */
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 2%;
  }
`;

export default EditorEmotionList;
