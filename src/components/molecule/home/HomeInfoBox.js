import React from "react";
import styled from "styled-components";
import { getStringDate } from "../../../util/date";
import SubTitle from "../../atom/text/SubTitle";
import CommonText from "../../atom/text/CommonText";

const HomeInfoBox = ({ onClick, date, title }) => {
  return (
    <Wrapper onClick={onClick}>
      <StyledSubTitle>{title}</StyledSubTitle>
      <CommonText size={15} mt={5} color={"#A8A8A8"}>
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
  width: 55%;
`;
const StyledSubTitle = styled(SubTitle)`
  font-size: 14px;
`;

export default HomeInfoBox;
