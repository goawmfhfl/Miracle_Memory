import React from "react";
import SubTitle from "../../atom/text/SubTitle";
import EditorTextAreaBox from "../../molecule/box/EditorTextAreaBox";

const EditorTextAreaItem = ({ content, onChange, reference }) => {
  return (
    <section>
      <SubTitle text={"Today`s Memory"} />
      <EditorTextAreaBox
        conten={content}
        onChange={onChange}
        reference={reference}
      />
    </section>
  );
};
export default React.memo(EditorTextAreaItem);
