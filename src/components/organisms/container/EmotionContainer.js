import styled from "styled-components";
import SubText from "../../module/text/SubText";
import EditEmotionBox from "../box/EditEmotionBox";
import { emotionList } from "../../../util/emotion";

const EmotionContainer = ({ handleClickEmote, emotion }) => {
  return (
    <Section>
      <SubText text={"오늘의 점수"} />
      <Wrapper>
        {emotionList &&
          emotionList.map((list) => {
            <EditEmotionBox
              key={list.emotion_id}
              {...list}
              onClick={handleClickEmote}
              isSelected={it.emotion_id === emotion}
            />;
          })}
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 40px;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 2%;
`;
export default EmotionContainer;
