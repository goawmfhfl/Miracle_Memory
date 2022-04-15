import React from "react";
import CommonText from "../../atom/text/CommonText";
import { getCurTime } from "../../../util/date";
import styled from "styled-components";
const TodoTimeBox = () => {
  return (
    <Wrapper>
      <FirstChild>
        <FirstText>
          {getCurTime().curMonths}월 {getCurTime().curDate}일{" "}
        </FirstText>
        <FirstText>{getCurTime().curDays}</FirstText>
      </FirstChild>
      <SecondChild>
        <SecondText>
          {getCurTime().curHour}시 {getCurTime().curMinutes}분
        </SecondText>
      </SecondChild>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  background-color: ${(props) => props.theme.palette["main"]};
  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};
`;
const FirstChild = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 360px) and (max-width: 600px) {
    flex-direction: column;
  }
  & > span {
    margin-bottom: 10px;
  }
`;
const SecondChild = styled.div``;

const FirstText = styled(CommonText)`
  font-size: 25px;
  color: #fff;
  font-weight: bolder;

  @media (min-width: 360px) and (max-width: 600px) {
    font-size: 23px;
  }
  @media (min-width: 600px) {
    &:nth-child(2) {
      margin-left: 10px;
    }
  }
`;

const SecondText = styled(CommonText)`
  color: #fff;
  font-size: 25px;
  font-weight: bolder;
  @media (min-width: 360px) and (max-width: 600px) {
    font-size: 23px;
  }
`;
export default TodoTimeBox;
