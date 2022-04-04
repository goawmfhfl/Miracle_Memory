import React from "react";
import SubTitleBox from "../../molecule/common/SubTitleBox";
import EditorInputTitleBox from "../../molecule/editor/EditorInputTitleBox";

const EditorTitleItem = ({ title, titleRef, onChange }) => {
  return (
    <section>
      <SubTitleBox
        text={"미라클 제목"}
        icon={process.env.PUBLIC_URL + `/assets/icon/plus-square.svg`}
        mb={15}
      />
      <EditorInputTitleBox
        title={title}
        titleRef={titleRef}
        onChange={onChange}
      />
    </section>
  );
};
export default React.memo(EditorTitleItem);
