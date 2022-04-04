import React from "react";
import styled from "styled-components";
import AlbumHandlerBox from "../../molecule/home/AlbumHandlerBox";
import HomeLogoBox from "../../molecule/home/HomeLogoBox";

const HomeAlbumItem = ({ gallery, onClick }) => {
  return (
    <Wrapper>
      <HomeLogoBox />
      <AlbumHandlerBox gallery={gallery} onClick={onClick} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default HomeAlbumItem;
