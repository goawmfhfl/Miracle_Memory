import React from "react";
import styled from "styled-components";
import SubTitle from "../../atom/text/SubTitle";
import CommonText from "../../atom/text/CommonText";

const GalleryContentBox = ({ title, content, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <StyledSubTitle>{title}</StyledSubTitle>
      <CommonText>{content}</CommonText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  margin-bottom: 10px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StyledSubTitle = styled(SubTitle)`
  font-size: 16px;
  margin-bottom: 15px;
`;
export default GalleryContentBox;
