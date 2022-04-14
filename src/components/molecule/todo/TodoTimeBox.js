import React, { useEffect, useState } from "react";
import CommonText from "../../atom/text/CommonText";
import { getCurTime } from "../../../util/date";
import styled from "styled-components";
const TodoTimeBox = () => {
  return (
    <Wrapper>
      <FirstText>
        {getCurTime().curMonths}월 {getCurTime().curDate}일{" "}
        {getCurTime().curDays}
      </FirstText>
      <SecondText>
        {getCurTime().curHour}시 {getCurTime().curMinutes}분
      </SecondText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.palette["main"]};
  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};
`;

const FirstText = styled(CommonText)`
  font-size: 27px;
  color: #fff;
  font-weight: bolder;
  margin-bottom: 10px;

  @media (min-width: 360px) and (max-width: 600px) {
    font-size: 19px;
  }
`;
const SecondText = styled(CommonText)`
  color: #fff;
  font-size: 24px;

  @media (min-width: 360px) and (max-width: 600px) {
    font-size: 19px;
  }
`;
export default TodoTimeBox;
