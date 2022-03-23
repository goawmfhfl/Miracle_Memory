import React from "react";

import { MainHeader, HeadLeftBtn, HeadRightBtn, HeadText } from "./index.style";

const Header = ({ leftChild, rightChild, headText }) => {
  return (
    <MainHeader>
      <HeadLeftBtn>{leftChild}</HeadLeftBtn>
      <HeadText>{headText}</HeadText>
      <HeadRightBtn>{rightChild}</HeadRightBtn>
    </MainHeader>
  );
};
export default Header;
