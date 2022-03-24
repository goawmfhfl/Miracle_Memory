import styled from "styled-components";

const Info = ({ goDetail, date, content }) => {
  // const strDate = new Date(parseInt(date)).toLocaleDateString();
  // content.slice(0, 25)
  return (
    <Wrapper onClick={goDetail}>
      <Date>{date}</Date>
      <Preview>{content}</Preview>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  cursor: pointer;
`;
const Date = styled.span`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 5px;
`;
const Preview = styled.span`
  font-size: 18px;
`;

export default Info;
