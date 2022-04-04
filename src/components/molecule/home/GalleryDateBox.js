import React from "react";
import { getStringDate } from "../../../util/date";
import styled from "styled-components";
import CommonText from "../../atom/text/CommonText";

const GalleryDateBox = ({ date }) => {
  return (
    <Wrapper>
      <CommonText>{getStringDate(date).dataString()}</CommonText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  margin-bottom: 15px;
`;
export default GalleryDateBox;
