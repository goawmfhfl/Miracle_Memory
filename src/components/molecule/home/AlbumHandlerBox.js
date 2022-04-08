import React from "react";
import styled from "styled-components";
import Icon from "../../atom/icon/Icon";

const AlbumHandlerBox = ({ gallery, onClick }) => {
  return (
    <Wrapper>
      <LeftButton onClick={onClick} disabled={gallery}>
        {gallery ? (
          <ListIcon
            icon={process.env.PUBLIC_URL + `/assets/icon/list-on.svg`}
          />
        ) : (
          <ListIcon
            icon={process.env.PUBLIC_URL + `/assets/icon/list-off.svg`}
          />
        )}
      </LeftButton>
      <RightButton onClick={onClick} disabled={!gallery}>
        {gallery ? (
          <AlbumIcon
            icon={process.env.PUBLIC_URL + `/assets/icon/album-off.svg`}
          />
        ) : (
          <AlbumIcon
            icon={process.env.PUBLIC_URL + `/assets/icon/album-on.svg`}
          />
        )}
      </RightButton>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

const ListIcon = styled(Icon)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
const AlbumIcon = styled(Icon)`
  width: 30px;
  height: 30px;
`;

const LeftButton = styled.button.attrs({ type: "button" })`
  border: none;
  background-color: inherit;
  width: 26px;
  height: 26px;
  margin-right: 5px;
`;
const RightButton = styled.button.attrs({ type: "button" })`
  border: none;
  background-color: inherit;
  width: 26px;
  height: 26px;
`;

export default AlbumHandlerBox;
