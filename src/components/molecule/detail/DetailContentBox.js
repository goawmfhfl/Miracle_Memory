import React from "react";
import styled from "styled-components";
import Content from "../../atom/text/Content";

const DetailContentBox = ({ content }) => {
  return (
    <Wrapper>
      <Content content={content} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #ececec;
  word-break: keep-all;
  overflow-wrap: break-word;
`;
export default DetailContentBox;
