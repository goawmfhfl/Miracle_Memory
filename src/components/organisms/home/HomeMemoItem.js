import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import HomeEmotionBox from "../../molecule/home/HomeEmotionBox";
import HomeInfoBox from "../../molecule/home/HomeInfoBox";
import HomeButtonBox from "../../molecule/home/HomeButtonBox";

const HomeMemoItem = ({ emotion, id, date, title }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <MomoItem>
      <HomeEmotionBox onClick={goDetail} emotion={emotion} />
      <HomeInfoBox onClick={goDetail} date={date} title={title} />
      <HomeButtonBox text={"수정하기"} onClick={goEdit} />
    </MomoItem>
  );
};
const fadeIn = keyframes`
from{
  opacity:0
}
to{
  opacity:1
}
`;

const MomoItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;

  background: #ffffff;
  border-radius: 15px;
  border: 1px solid #f4f4f4;
  box-shadow: ${(props) => props.theme.shadow["cardShadow"]};

  transition: 0.5s;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  &:hover {
    background-color: ${(props) => props.theme.palette["main"]};
    border: 1px solid rgba(163, 163, 163, 0.35);
    color: #fff;
    span {
      color: #fff;
    }
  }
`;

export default HomeMemoItem;
