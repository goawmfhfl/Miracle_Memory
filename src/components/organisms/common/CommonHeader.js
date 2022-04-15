import React from "react";
import styled from "styled-components";
import Title from "../../atom/text/Title";

const CommonHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <MainHeader>
      <LeftBtn>{leftChild}</LeftBtn>
      <HeadText>
        <Title>{headText}</Title>
      </HeadText>
      <RightBtn>{rightChild}</RightBtn>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  padding: 20px 10px;

  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.palette["border"]};
  display: flex;
  align-items: center;

  & > div {
    display: flex;
  }

  @media (min-width: 360px) and (max-width: 600px) {
    padding: 10px 5px;
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
  justify-content: center;
  text-align: center;
`;

export default React.memo(CommonHeader);
