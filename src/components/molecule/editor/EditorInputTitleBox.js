import React from "react";
import styled from "styled-components";
import TitleInput from "../../atom/etc/TitleInput";

const EditorInputTitleBox = ({ title, titleRef, onChange }) => {
  return (
    <Wrapper>
      <TitleInput
        title={title}
        titleRef={titleRef}
        onChange={onChange}
        placeholder={"미라클 제목을 입력해주세요"}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default EditorInputTitleBox;
