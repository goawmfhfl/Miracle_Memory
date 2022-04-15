import React from "react";
import styled from "styled-components";
import SubTitle from "../../atom/text/SubTitle";
import Icon from "../../atom/icon/Icon";

const SubTitleBox = ({ text, icon, mb }) => {
  return (
    <Wrapper mb={mb}>
      <Icon icon={icon} mr={"7px"} />
      <SubTitle>{text}</SubTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => `${props.mb}px` || "16px"};
`;
export default SubTitleBox;
