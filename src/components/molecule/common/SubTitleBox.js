import React from "react";
import styled from "styled-components";
import SubTitle from "../../atom/text/SubTitle";
import Icon from "../../atom/icon/Icon";

const SubTitleBox = ({ text, icon, mb }) => {
  return (
    <Wrapper mb={mb}>
      <Icon icon={icon} />
      <SubTitle text={text} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  font-weight: bold;
  margin-bottom: ${(props) => `${props.mb}px` || "16px"};
`;
export default SubTitleBox;
