import React from "react";
import styled from "styled-components";
import Title from "../../atom/text/Title";

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
  margin-bottom: 20px;
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
