import React from "react";
import styled from "styled-components";
import Button from "../../atom/etc/Button";
const HomeButtonBox = ({ onClick }) => {
  return (
    <Wrapper>
      <Button type={"none"} onClick={onClick}>
        수정하기 ->
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;

  & > button {
    padding: 0px;
  }
`;

export default HomeButtonBox;
