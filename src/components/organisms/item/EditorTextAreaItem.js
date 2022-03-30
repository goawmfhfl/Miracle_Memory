import React from "react";
import SubTitle from "../../atom/text/SubTitle";
import TextAreaBox from "../box/TextAreaBox";

const EditorTextAreaItem = ({ content, onChange, reference }) => {
  return (
    <section>
      <SubTitle text={"Today`s Memory"} />
      <TextAreaBox conten={content} onChange={onChange} reference={reference} />
    </section>
  );
};
export default React.memo(EditorTextAreaItem);
