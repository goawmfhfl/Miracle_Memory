import React from "react";
import styled from "styled-components";
import Button from "../../atom/etc/Button";
const HomeButtonBox = ({ onClick }) => {
  return (
    <Wrapper>
      <Button text={"수정하기 ->"} type={"none"} onClick={onClick} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 70px;
`;
export default HomeButtonBox;
