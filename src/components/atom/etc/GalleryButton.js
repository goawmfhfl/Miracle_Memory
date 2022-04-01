import React from "react";
import styled from "styled-components";

const GalleryButton = ({ onClick, children, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export const Button = styled.button.attrs({ type: "button" })`
  border: none;
  background-color: inherit;
  width: 26px;
  height: 26px;
`;
export default GalleryButton;
