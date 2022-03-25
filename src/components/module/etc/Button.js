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
  border-radius: 5px;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 18px;

  white-space: nowrap;
  font-family: "Nanum Pen Script", cursive;
  &.default {
    background-color: #ececec;
    color: #000;
  }
  &.positive {
    background-color: #ececec;
    color: #fff;
  }
  &.negative {
    background-color: #e1936e;
    color: #fff;
  }
`;

export default Button;
