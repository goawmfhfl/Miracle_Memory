import React from "react";
import styled from "styled-components";
import emotionList from "../../../util/emotionList";
import SubTitle from "../../molecule/text/SubTitle";
import EditEmotion from "../../molecule/emotion/EditEmotion";

const EmotionBox = ({ emotion, onClick }) => {
  return (
    <section>
      <SubTitle text={"오늘의 점수"} />
      <Wrapper>
        {emotionList &&
          emotionList.map((list) => (
            <EditEmotion
              key={list.emotion_id}
              {...list}
              onClick={onClick}
              isSelected={list.emotion_id === emotion}
            />
          ))}
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 2%;
`;
export default React.memo(EmotionBox);
