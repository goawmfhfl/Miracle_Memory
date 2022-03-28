import TextArea from "../../moldecule/etc/TextArea";
import SubTitle from "../../moldecule/text/SubTitle";

const TextAreaBox = ({ content, contentRef, onChange }) => {
  return (
    <section>
      <SubTitle text={"Today`s Memory"} />
      <TextArea ref={contentRef} content={content} onChange={onChange} />
    </section>
  );
};

export default TextAreaBox;
