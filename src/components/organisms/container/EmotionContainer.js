import styled from "styled-components";
import SubTitle from "../../module/text/SubTitle";
import EditEmotionBox from "../box/EditEmotionBox";
import { emotionList } from "../../../util/emotion";

const EmotionContainer = ({ handleClickEmote, emotion }) => {
  return (
    <section>
      <SubTitle text={"오늘의 점수"} />
      <Wrapper>
        {emotionList &&
          emotionList.map((list) => (
            <EditEmotionBox
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
export default EmotionContainer;
