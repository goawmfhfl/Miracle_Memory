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
            <Icon icon={process.env.PUBLIC_URL + `/assets/icon/list-on.svg`} />
          ) : (
            <Icon icon={process.env.PUBLIC_URL + `/assets/icon/list-off.svg`} />
          )}
        </GalleryButton>
        <GalleryButton onClick={galleryHandler} disabled={!gallery}>
          {gallery ? (
            <Icon
              icon={process.env.PUBLIC_URL + `/assets/icon/album-off.svg`}
            />
          ) : (
            <Icon icon={process.env.PUBLIC_URL + `/assets/icon/album-on.svg`} />
          )}
        </GalleryButton>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default AlbumHandlerBox;
