import React from "react";
import { useState } from "react";
import styled from "styled-components";
import AlbumHandlerBox from "../../molecule/home/AlbumHandlerBox";
import HomeLogoBox from "../../molecule/home/HomeLogoBox";

const HomeAlbumItem = () => {
  const [gallery, setGallery] = useState(true);
  const galleryHandler = () => {
    setGallery(!gallery);
  };
  return (
    <Wrapper>
      <HomeLogoBox />
      <AlbumHandlerBox gallery={gallery} galleryHandler={galleryHandler} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default HomeAlbumItem;
