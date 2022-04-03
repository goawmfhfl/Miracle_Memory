import React from "react";
import styled from "styled-components";
import TitleInput from "../../atom/etc/TitleInput";

const EditorInputTitleBox = ({ title, titleRef, onChange }) => {
  return (
    <Wrapper>
      <TitleInput value={title} titleRef={titleRef} onChange={onChange} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default EditorInputTitleBox;
