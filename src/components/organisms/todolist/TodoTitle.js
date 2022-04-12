import React from "react";
import styled from "styled-components";
import Title from "../../atom/text/Title";

const TodoTitle = () => {
  return (
    <Wrapper>
      <StyledTitle>Add Your Miracle Plan</StyledTitle>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10px;
`;

const StyledTitle = styled(Title)`
  text-align: center;
`;
export default TodoTitle;
