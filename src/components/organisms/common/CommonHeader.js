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

// 89px header
// 75px
// height: calc(100% - 164px);
const MainHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  /* margin-bottom: 20px; */
  border-bottom: 1px solid ${(props) => props.theme.palette["border"]};

  display: flex;
  align-items: center;

  & > div {
    display: flex;
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
