import React from "react";
import styled from "styled-components";
import HomeEmotionImg from "../../atom/img/HomeEmotionImg";
const HomeEmotionBox = ({ onClick, emotion }) => {
  return (
    <Wrapper className={`emotion_${emotion}`} onClick={onClick}>
      <HomeEmotionImg emotion={emotion} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  min-width: 100px;
  height: 80px;

  box-sizing: content-box;
  padding: 5px;
  border-radius: 15px;

  display: flex;
  justify-content: center;

  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};
  background-color: ${(props) => props.theme.palette["border"]};
`;
export default HomeEmotionBox;
