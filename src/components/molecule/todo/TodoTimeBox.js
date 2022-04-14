import React from "react";
import styled from "styled-components";
import CommonText from "../../atom/text/CommonText";

const TodoTimeBox = () => {
  return (
    <Wrapper>
      <CommonText>1월 4일 목요일</CommonText>
      <CommonText> 10시 33분</CommonText>
    </Wrapper>
  );
};

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
export default TodoTimeBox;
