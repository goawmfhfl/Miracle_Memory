import styled from "styled-components";
import TextArea from "../../module/etc/TextArea";
import SubText from "../../module/text/SubText";

const TextAreaBox = ({ content, contentRef, onChange }) => {
  return (
    <Section>
      <SubText text={"Today`s Memory"} />
      <TextArea ref={contentRef} value={content} onChange={onChange} />
    </Section>
  );
};

const Section = styled.section``;

export default TextAreaBox;
