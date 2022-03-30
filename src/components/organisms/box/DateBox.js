import React from "react";
import styled from "styled-components";
import SubTitle from "../../molecule/text/SubTitle";
import InputDate from "../../molecule/etc/InputDate";

const DateBox = ({ date, setDate }) => {
  return (
    <Section>
      <SubTitle text={"오늘은 언제인가요?"} />
      <InputDate onChange={setDate} date={date} />
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 40px;
`;

export default React.memo(DateBox);
