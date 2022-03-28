import { useState } from "react";
import TextArea from "../../molecule/etc/TextArea";
import SubTitle from "../../molecule/text/SubTitle";

const TextAreaBox = () => {
  const [content, setContent] = useState("");
  const handleInputValue = (value) => {
    setContent(value);
  };
  return (
    <section>
      <SubTitle text={"Today`s Memory"} />
      <TextArea content={content} onChange={handleInputValue} />
    </section>
  );
};

export default TextAreaBox;
