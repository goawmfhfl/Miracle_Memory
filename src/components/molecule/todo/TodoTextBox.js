import React from "react";
import styled from "styled-components";
import CommonText from "../../atom/text/CommonText";
const TodoInputBox = ({ InputValue, checked }) => {
  return (
    <Wrapper>
      <InputBoxText className={checked ? "underline" : ""}>
        {InputValue}
      </InputBoxText>
    </Wrapper>
  );
};

const InputBoxText = styled(CommonText)`
  font-size: 18px;
  &.underline {
    text-decoration-line: line-through;
    color: ${(props) => props.theme.palette["border"]};
  }
`;

const Wrapper = styled.div``;
export default TodoInputBox;
