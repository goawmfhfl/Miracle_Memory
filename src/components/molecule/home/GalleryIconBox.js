import React from "react";
import styled from "styled-components";
import Logo from "../../atom/logo/Logo";
import Icon from "../../atom/icon/Icon";

const GalleryIconBox = ({ onClick, emotion }) => {
  return (
    <Wrapper onClick={onClick}>
      <StyledLogo
        src={process.env.PUBLIC_URL + `/assets/icon/emotion${emotion}.svg`}
      />
      <Icon icon={process.env.PUBLIC_URL + `/assets/icon/chevron-right.svg`} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledLogo = styled(Logo)`
  width: 24px;
  height: 24px;
`;
export default GalleryIconBox;
