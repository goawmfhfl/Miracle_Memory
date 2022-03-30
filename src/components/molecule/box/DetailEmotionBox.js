import React from "react";
import styled from "styled-components";
import DetailEmotionImg from "../../atom/img/DetailEmotionImg";
import Descript from "../../atom/text/Descript";
const DetailEmotionBox = ({ id, img, descript }) => {
  return (
    <Wrapper className={`emotion_${id}`}>
      <DetailEmotionImg id={id} img={img} />
      <Descript color={"black"} size={"18px"} descript={descript} />
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

export default DetailEmotionBox;
