import styled from "styled-components";
import { getStringDate } from "../../../util/date";
const Info = ({ date, content, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <DateText>{getStringDate(date).DataString()}</DateText>
      <Preview>{content.slice(0, 25)}</Preview>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 20px;
  cursor: pointer;
`;
const DateText = styled.span`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 10px;
`;
const Preview = styled.span`
  font-size: 18px;
`;

export default Info;
