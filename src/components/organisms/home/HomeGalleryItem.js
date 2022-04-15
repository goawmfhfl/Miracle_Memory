import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import GalleryIconBox from "../../molecule/home/GalleryIconBox";
import GalleryContentBox from "../../molecule/home/GalleryContentBox";
import GalleryDateBox from "../../molecule/home/GalleryDateBox";

const HomeGalleryItem = ({ emotion, id, date, title, content }) => {
  const navigate = useNavigate();
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  const goDetail = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <GalleryItem>
      <GalleryIconBox emotion={emotion} onClick={goEdit} />
      <GalleryContentBox title={title} content={content} onClick={goDetail} />
      <GalleryDateBox date={date} />
    </GalleryItem>
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

const GalleryItem = styled.li`
  padding: 10px;
  margin-top: 2.5%;
  margin-left: 2.5%;
  min-width: 100px;
  min-height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #fff;
  border-radius: 15px;
  border: 1px solid #f4f4f4;
  box-shadow: ${(props) => props.theme.shadow["cardShadow"]};

  transition: 0.5s;
  animation-duration: 0.5s;
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

export default HomeGalleryItem;
