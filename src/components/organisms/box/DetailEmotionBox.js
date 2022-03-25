import styled from "styled-components";
import SubTitle from "../../module/text/SubTitle";
import DetailEmotion from "../../module/emotion/DetailEmotion";

const DetailEmotionBox = ({ emotion, img, descript }) => {
  return (
    <Section>
      <SubTitle text={"오늘의 감정"} />
      <DetailEmotion emotion={emotion} img={img} descript={descript} />
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  margin-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export default DetailEmotionBox;
