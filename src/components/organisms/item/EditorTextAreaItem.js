import React from "react";
import SubTitleBox from "../../molecule/common/SubTitleBox";
import EditorTextAreaBox from "../../molecule/editor/EditorTextAreaBox";

const EditorTextAreaItem = ({ content, onChange, reference }) => {
  return (
    <section>
      <SubTitleBox
        text={"미라클 일기"}
        icon={process.env.PUBLIC_URL + `/assets/icon/edit.svg`}
        mb={16}
      />
      <EditorTextAreaBox
        content={content}
        onChange={onChange}
        reference={reference}
      />
    </section>
  );
};
export default React.memo(EditorTextAreaItem);
