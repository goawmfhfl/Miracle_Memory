import styled from "styled-components";

const DetailEmotion = ({ descript, emotion, img }) => {
  return (
    <Wrapper className={`emotion_${emotion}`}>
      <EmotionImg className={`emotion_${emotion}`} src={img} />
      <Descript color={"black"} size={"18px"}>
        {descript}
      </Descript>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ececec;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  &.emotion_1 {
    background-color: #63c964;
  }
  &.emotion_2 {
    background-color: #9dd772;
  }
  &.emotion_3 {
    background-color: #fdce17;
  }
  &.emotion_4 {
    background-color: #fd8446;
  }
  &.emotion_5 {
    background-color: #fd565f;
  }
`;

const EmotionImg = styled.img.attrs({ alt: "이모션 이미지" })`
  border-radius: 50%;

  &.emotion_1 {
    box-shadow: 0px 0px 20px #038d05;
  }
  &.emotion_2 {
    box-shadow: 0px 0px 20px #5bb616;
  }
  &.emotion_3 {
    box-shadow: 0px 0px 20px #cfa601;
  }
  &.emotion_4 {
    box-shadow: 0px 0px 20px #f86d28;
  }
  &.emotion_5 {
    box-shadow: 0px 0px 20px #bd131c;
  }
`;

const Descript = styled.span`
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => props.color || "#fff"};
  padding-bottom: 10px;
`;

export default DetailEmotion;
