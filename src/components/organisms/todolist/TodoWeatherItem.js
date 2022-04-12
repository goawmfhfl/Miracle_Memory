import React from "react";
import styled from "styled-components";
import TodoTimeBox from "../../molecule/todo/TodoTimeBox";
import TodoWeatherBox from "../../molecule/todo/TodoWeatherBox";

const TodoWeatherItem = () => {
  return (
    <Wrapper>
      <LeftCol>
        <TodoTimeBox />
      </LeftCol>
      <RightCol>
        <TodoWeatherBox />
      </RightCol>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  width: 100%;
  padding: 15px;

  background-color: ${(props) => props.theme.palette["box"]};

  & > div {
    display: flex;
  }
`;
const LeftCol = styled.div`
  width: 50%;
`;
const RightCol = styled.div`
  width: 50%;
`;
export default TodoWeatherItem;
