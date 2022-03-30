import React from "react";
import InputArea from "../../atom/etc/TextArea";

const EditorTextAreaBox = ({ content, onChange, reference }) => {
  return (
    <div>
      <InputArea content={content} onChange={onChange} reference={reference} />
    </div>
  );
};

export default EditorTextAreaBox;
