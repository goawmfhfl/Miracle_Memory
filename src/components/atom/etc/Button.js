import styled from "styled-components";

const Button = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <StyledButton className={btnType} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "default",
};

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 15px;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 18px;

  white-space: nowrap;
  font-family: "Amsterdam";
  font-weight: bolder;

  &.default {
    background-color: ${(props) => props.theme.palette["border"]};
    box-shadow: ${(props) => props.theme.shadow["boxShadow"]};
    color: #000;
  }
  &.positive {
    background-color: ${(props) => props.theme.palette["main"]};
    box-shadow: ${(props) => props.theme.shadow["mainShadow"]};
    color: #fff;
  }
  &.negative {
    background-color: ${(props) => props.theme.palette["text"]};
    box-shadow: ${(props) => props.theme.shadow["boxShadow"]};
    color: #fff;
  }
`;

export default Button;
