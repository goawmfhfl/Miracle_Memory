import styled from "styled-components";

const DateInput = ({ date, setDate }) => {
  return <Input value={date} onChange={(e) => setDate(e.target.value)} />;
};

const Input = styled.input.attrs({ type: "date" })`
  border: none;
  border-radius: 15px;
  background-color: ${(props) => props.theme.palette["box"]};
  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  cursor: pointer;
  font-size: 20px;

  font-family: "Amsterdam";
  font-weight: bolder;

  @media (min-width: 360px) and (max-width: 600px) {
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 18px;
  }
`;
export default DateInput;
