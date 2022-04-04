import React from "react";
import styled from "styled-components";
import { getStringDate } from "../../../util/date";
import SubTitle from "../../atom/text/SubTitle";
import CommonText from "../../atom/text/CommonText";

const HomeInfoBox = ({ onClick, date, title }) => {
  return (
    <Wrapper onClick={onClick}>
      <SubTitle>{title}</SubTitle>
      <CommonText size={15} pb={10} mt={10} color={"#A8A8A8"}>
        {getStringDate(date).dataString()}
      </CommonText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;

  margin-left: 20px;
  width: 60%;
`;

export default HomeInfoBox;
