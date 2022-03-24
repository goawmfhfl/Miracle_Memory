import styled from "styled-components";
import SubText from "../../module/text/SubText";
import Date from "../../module/etc/Date";

const DateBox = ({ onChange }) => {
  return (
    <Section>
      <SubText text={"오늘은 언제인가요?"} />
      <Date onChange={onChange} />
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 40px;
`;

export default DateBox;
