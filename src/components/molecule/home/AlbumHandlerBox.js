import React from "react";
import styled from "styled-components";
import Icon from "../../atom/icon/Icon";
import GalleryButton from "../../atom/etc/GalleryButton";

const AlbumHandlerBox = ({ gallery, galleryHandler }) => {
  return (
    <>
      <Wrapper>
        <GalleryButton onClick={galleryHandler} disabled={gallery}>
          {gallery ? (
            <ListIcon
              icon={process.env.PUBLIC_URL + `/assets/icon/list-on.svg`}
            />
          ) : (
            <ListIcon
              icon={process.env.PUBLIC_URL + `/assets/icon/list-off.svg`}
            />
          )}
        </GalleryButton>
        <GalleryButton onClick={galleryHandler} disabled={!gallery}>
          {gallery ? (
            <AlbumIcon
              icon={process.env.PUBLIC_URL + `/assets/icon/album-off.svg`}
            />
          ) : (
            <AlbumIcon
              icon={process.env.PUBLIC_URL + `/assets/icon/album-on.svg`}
            />
          )}
        </GalleryButton>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  min-width: 60px;
  display: flex;
  justify-content: space-between;
`;

const ListIcon = styled(Icon)`
  width: 30px;
  height: 30px;
`;
const AlbumIcon = styled(Icon)`
  width: 30px;
  height: 30px;
`;

export default AlbumHandlerBox;
