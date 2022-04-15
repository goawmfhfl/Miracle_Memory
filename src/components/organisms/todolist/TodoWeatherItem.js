import React from "react";
import styled from "styled-components";
import TodoTimeBox from "../../molecule/todo/TodoTimeBox";
import TodoWeatherBox from "../../molecule/todo/TodoWeatherBox";

const TodoWeatherItem = () => {
  return (
    <Wrapper>
      <TodoTimeBox />
      <TodoWeatherBox />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export default TodoWeatherItem;
