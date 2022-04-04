import React from "react";
import styled, { keyframes } from "styled-components";
import GalleryIconBox from "../../molecule/home/GalleryIconBox";
import GalleryContentBox from "../../molecule/home/GalleryContentBox";
import GalleryDateBox from "../../molecule/home/GalleryDateBox";

const HomeGalleryItem = () => {
  return (
    <GalleryItem>
      <GalleryIconBox />
      <GalleryContentBox />
      <GalleryDateBox />
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
  width: 46%;
  margin-top: 2.5%;
  margin-left: 2.5%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #ffffff;
  border-radius: 15px;
  border: 1px solid #f4f4f4;
  box-shadow: ${(props) => props.theme.shadow["cardShadow"]};

  transition: 0.5s;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  &:hover {
    background-color: rgba(163, 163, 163, 0.35);
    border: 1px solid rgba(163, 163, 163, 0.35);
  }
`;

export default HomeGalleryItem;
