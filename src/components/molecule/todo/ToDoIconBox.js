import React from "react";
import styled from "styled-components";
import Icon from "../../atom/icon/Icon";

const ToDoIconBox = ({ icon, color, mr, onClick }) => {
  return (
    <Wrapper color={color} mr={mr} onClick={onClick}>
      <Icon icon={icon} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.color || props.theme.palette["main"]};
  margin-right: ${(props) => `${props.mr && props.mr}px`};
  padding: 5px;
  border-radius: 10px;

  cursor: pointer;
`;
export default ToDoIconBox;
