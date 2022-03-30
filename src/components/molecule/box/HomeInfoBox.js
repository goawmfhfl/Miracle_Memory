import React from "react";
import styled from "styled-components";
import { getStringDate } from "../../../util/date";
import CommonText from "../../atom/text/CommonText";

const HomeInfoBox = ({ onClick, date, content }) => {
  return (
    <Wrapper onClick={onClick}>
      <CommonText
        descript={getStringDate(date).dataString()}
        size={25}
        pb={10}
      />
      <CommonText descript={content} size={18} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 20px;
  cursor: pointer;
`;
export default HomeInfoBox;
