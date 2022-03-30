import React from "react";
import styled from "styled-components";
import Title from "../../molecule/text/Title";

const CommonHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <MainHeader>
      <LeftBtn>{leftChild}</LeftBtn>
      <HeadText>
        <Title text={headText} />
      </HeadText>
      <RightBtn>{rightChild}</RightBtn>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;

  & > div {
    display: flex;
  }
  button {
    /* font-family: "Nanum Pen Script", cursive; */
  }
`;
const LeftBtn = styled.div`
  width: 25%;
  justify-content: flex-start;
`;
const RightBtn = styled.div`
  width: 25%;
  justify-content: flex-end;
`;
const HeadText = styled.div`
  width: 50%;
  font-size: 25px;
  justify-content: center;
  text-align: center;
`;

export default React.memo(CommonHeader);
