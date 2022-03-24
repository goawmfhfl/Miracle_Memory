import styled from "styled-components";

const DetailEmotion = ({ emotion_descript, emotion, emotion_img }) => {
  return (
    <>
      <EmotionImg className={emotion} src={emotion_img} />
    </>
  );
};

const EmotionImg = styled.img.attrs({ alt: "이모션 이미지" })`
  border-radius: 50%;

  &.1 {
    box-shadow: 0px 0px 20px #038d05;
  }
  &.2 {
    box-shadow: 0px 0px 20px #5bb616;
  }
  &.3 {
    box-shadow: 0px 0px 20px #cfa601;
  }
  &.4 {
    box-shadow: 0px 0px 20px #f86d28;
  }
  &.5 {
    box-shadow: 0px 0px 20px #bd131c;
  }
`;

export default DetailEmotion;
