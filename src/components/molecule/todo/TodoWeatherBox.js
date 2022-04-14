import React from "react";
import styled from "styled-components";
import CommonText from "../../atom/text/CommonText";
import Icon from "../../atom/icon/Icon";

const TodoWeatherBox = () => {
  return (
    <Wrapper>
      <CommonText>1월 4일 목요일</CommonText>
      <Icon></Icon>
    </Wrapper>
  );
};
export default TodoWeatherBox;

const Wrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.palette["box"]};
  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};
`;
