import styled from "styled-components";
import SubText from "../../module/text/SubText";
import Content from "../../module/text/Content";

const DetailTextBox = ({ content }) => {
  return (
    <Section>
      <SubText text={"오늘의 기록"} />
      <Content content={content} />
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 40px;
`;

export default DetailTextBox;
