import React from "react";
import styled from "styled-components";
import Button from "../../molecule/etc/Button";
const HomeButtonBox = ({ onClick }) => {
  return (
    <Wrapper>
      <Button text={"수정하기"} onClick={onClick} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-width: 70px;
`;
export default HomeButtonBox;
