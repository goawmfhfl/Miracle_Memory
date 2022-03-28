import TextArea from "../../molecule/etc/TextArea";
import SubTitle from "../../molecule/text/SubTitle";

const TextAreaBox = ({ content, onChange, reference }) => {
  return (
    <section>
      <SubTitle text={"Today`s Memory"} />
      <TextArea content={content} onChange={onChange} reference={reference} />
    </section>
  );
};

export default TextAreaBox;
