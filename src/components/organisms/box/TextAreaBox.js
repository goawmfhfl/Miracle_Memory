import TextArea from "../../molecule/etc/TextArea";
import SubTitle from "../../molecule/text/SubTitle";

const TextAreaBox = ({ content, contentRef, onChange }) => {
  return (
    <section>
      <SubTitle text={"Today`s Memory"} />
      <TextArea ref={contentRef} content={content} onChange={onChange} />
    </section>
  );
};

export default TextAreaBox;
