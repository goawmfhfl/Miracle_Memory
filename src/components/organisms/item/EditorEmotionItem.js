import React from "react";
import SubTitleBox from "../../molecule/common/SubTitleBox";
import EditorEmotionList from "../list/EditorEmotionList";

const EditorEmotionItem = ({ emotion, onClick }) => {
  return (
    <section>
      <SubTitleBox
        text={"미라클 감정"}
        icon={process.env.PUBLIC_URL + `/assets/icon/smile.svg`}
      />
      <EditorEmotionList emotion={emotion} onClick={onClick} />
    </section>
  );
};
export default React.memo(EditorEmotionItem);
