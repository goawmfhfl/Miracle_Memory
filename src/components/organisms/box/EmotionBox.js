import { useState } from "react";
import { emotionList } from "../../../util/emotion";
import styled from "styled-components";
import SubTitle from "../../molecule/text/SubTitle";
import EditEmotion from "../../molecule/emotion/EditEmotion";

const EmotionItem = () => {
  const [emotion, setEmotion] = useState(3);
  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  };
  return (
    <section>
      <SubTitle text={"오늘의 점수"} />
      <Wrapper>
        {emotionList &&
          emotionList.map((list) => (
            <EditEmotion
              key={list.emotion_id}
              {...list}
              onClick={handleClickEmote}
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
export default EmotionItem;
