import styled from "styled-components";
import SubTitle from "../../module/text/SubTitle";
import Memory from "../../module/text/Memory";

const DetailTextBox = ({ content }) => {
  return (
    <Section>
      <SubTitle text={"오늘의 기록"} />
      <Memory content={content} />
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 40px;
`;

export default DetailTextBox;
