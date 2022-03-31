import React from "react";
import styled from "styled-components";
import SubTitle from "../../atom/text/SubTitle";
import Icon from "../../atom/icon/Icon";

const SubTitleBox = ({ text, icon }) => {
  return (
    <Wrapper>
      <Icon icon={icon} />
      <SubTitle text={text} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
  font-weight: bold;
`;
export default SubTitleBox;
