import React from "react";
import styled from "styled-components";
import TitleInput from "../../atom/etc/TitleInput";

const EditorInputTitleBox = ({ date, setDate }) => {
  return (
    <Wrapper>
      <TitleInput
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default EditorInputTitleBox;
