import React from "react";
import styled from "styled-components";
import SubTitle from "../../atom/text/SubTitle";
import CommonText from "../../atom/text/Content";
// Title
// Content

const GalleryContentBox = () => {
  return (
    <Wrapper>
      <SubTitle text={"content"} />
      <CommonText content={"content"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 10px;
`;
export default GalleryContentBox;
