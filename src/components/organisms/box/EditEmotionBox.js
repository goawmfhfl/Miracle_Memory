import styled from "styled-components";
import SubText from "../../module/text/SubText";
import EditEmotion from "../../module/emotion/EditEmotion";
import Descript from "../../module/text/Decript";

const EditEmotionBox = ({ id, img, descript, onClick, isSelected }) => {
  return (
    <Section>
      <SubText text={"오늘의 점수"} />
      <EditEmotion
        id={id}
        img={img}
        onClick={onClick}
        isSelected={isSelected}
      />
      <Descript descript={descript} color={"white"} size={"18px"} />
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 40px;
`;
export default EditEmotionBox;
