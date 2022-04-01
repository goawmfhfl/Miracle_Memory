import React from "react";

import SubTitleBox from "../../molecule/common/SubTitleBox";
import EditorInputTitleBox from "../../molecule/editor/EditorInputTitleBox";

const EditorTitleItem = ({ date, setDate }) => {
  return (
    <section>
      <SubTitleBox
        text={"미라클 제목"}
        icon={process.env.PUBLIC_URL + `/assets/icon/plus-square.svg`}
        mb={15}
      />
      <EditorInputTitleBox date={date} setDate={setDate} />
    </section>
  );
};
export default EditorTitleItem;
