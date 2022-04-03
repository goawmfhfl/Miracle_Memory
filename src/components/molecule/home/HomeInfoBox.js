import React from "react";
import styled from "styled-components";
import { getStringDate } from "../../../util/date";
import CommonText from "../../atom/text/CommonText";

const HomeInfoBox = ({ onClick, date, title }) => {
  return (
    <Wrapper onClick={onClick}>
      <CommonText descript={title} size={25} />
      <CommonText
        descript={getStringDate(date).dataString()}
        size={15}
        pb={10}
        mt={10}
        color={"#A8A8A8"}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  margin-left: 20px;
  cursor: pointer;
  width: 60%;
`;

export default HomeInfoBox;
