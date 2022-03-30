import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeEmotionBox from "../../molecule/home/HomeEmotionBox";
import HomeInfoBox from "../../molecule/home/HomeInfoBox";
import HomeButtonBox from "../../molecule/home/HomeButtonBox";

const HomeMemoItem = ({ emotion, id, date, content }) => {
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
      <HomeInfoBox onClick={goDetail} date={date} content={content} />
      <HomeButtonBox text={"수정하기"} onClick={goEdit} />
    </MomoItem>
  );
};

const MomoItem = styled.li`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
`;

export default HomeMemoItem;
