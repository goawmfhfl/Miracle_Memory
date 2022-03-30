import React from "react";
import styled from "styled-components";

const EditorControlBox = ({ leftChild, rightChild }) => {
  return (
    <Wrapper>
      {leftChild}
      {rightChild}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default React.memo(EditorControlBox);
