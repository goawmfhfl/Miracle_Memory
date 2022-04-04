import React from "react";
import styled from "styled-components";
import SubTitle from "../../atom/text/SubTitle";
import CommonText from "../../atom/text/CommonText";

const GalleryContentBox = () => {
  return (
    <Wrapper>
      <StyledSubTitle>{"content"}</StyledSubTitle>
      <CommonText>{"content"}</CommonText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 10px;
`;
const StyledSubTitle = styled(SubTitle)`
  margin-bottom: 5px;
`;
export default GalleryContentBox;
