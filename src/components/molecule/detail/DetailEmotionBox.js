import React from "react";
import styled from "styled-components";
import DetailEmotionImg from "../../atom/img/DetailEmotionImg";
import CommonText from "../../atom/text/CommonText";
const DetailEmotionBox = ({ id, img, descript }) => {
  return (
    <Wrapper className={`emotion_${id}`}>
      <DetailEmotionImg id={id} img={img} />
      <TextBox>
        <CommonText color={"black"} size={25} descript={descript} />
      </TextBox>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 250px;
  height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const TextBox = styled.div`
  padding: 15px 25px 15px 25px;
  border-radius: 15px;
  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};
  /* background-color: ${(props) => props.theme.palette["border"]}; */
`;

export default DetailEmotionBox;
