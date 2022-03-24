import SubText from "../../module/text/SubText";
import DetailEmotion from "../../module/emotion/DetailEmotion";
import Descript from "../../module/text/Decript";
import styled from "styled-components";

const DetailEmotionBox = ({ emotion, emotion_img, emotion_descript }) => {
  return (
    <Section>
      <SubText text={"오늘의 감정"} />
      <DetailEmotion emotion={emotion} img={emotion_img} />
      <Descript descript={emotion_descript} color={"white"} size={"18px"} />
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 40px;
`;
export default DetailEmotionBox;
