import styled from "styled-components";

const Button = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative", "none"].includes(type)
    ? type
    : "default";
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
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: none;
  border-radius: 15px;

  @media (min-width: 360px) and (max-width: 600px) {
    font-size: 15px;
  }
  font-size: 22px;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  white-space: nowrap;
  font-family: "Amsterdam";
  font-weight: bolder;

  &.default {
    background-color: ${(props) => props.theme.palette["box"]};
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
  &.none {
    background-color: none;
  }
`;

export default Button;
