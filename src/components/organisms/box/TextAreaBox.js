import React from "react";
import TextArea from "../../molecule/etc/TextArea";

const TextAreaBox = ({ content, onChange, reference }) => {
  return (
    <div>
      <TextArea content={content} onChange={onChange} reference={reference} />
    </div>
  );
};

export default React.memo(TextAreaBox);
