import React from "react";
import SubTitle from "../../atom/text/SubTitle";
import EditorTextAreaBox from "../../molecule/editor/EditorTextAreaBox";

const EditorTextAreaItem = ({ content, onChange, reference }) => {
  return (
    <section>
      <SubTitle text={"Today`s Memory"} />
      <EditorTextAreaBox
        content={content}
        onChange={onChange}
        reference={reference}
      />
    </section>
  );
};
export default React.memo(EditorTextAreaItem);
