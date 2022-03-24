import styled from "styled-components";
import TextArea from "../../module/etc/TextArea";
import SubTitle from "../../module/text/SubTitle";

const TextAreaBox = ({ content, contentRef, onChange }) => {
  return (
    <Section>
      <SubTitle text={"Today`s Memory"} />
      <TextArea ref={contentRef} value={content} onChange={onChange} />
    </Section>
  );
};

const Section = styled.section``;

export default TextAreaBox;
