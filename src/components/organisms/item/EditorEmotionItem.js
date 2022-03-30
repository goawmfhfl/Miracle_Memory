import React from "react";
import SubTitle from "../../atom/text/SubTitle";
import EditorEmotionList from "../list/EditorEmotionList";

const EditorEmotionItem = ({ emotion, onClick }) => {
  return (
    <section>
      <SubTitle text={"오늘의 점수"} />
      <EditorEmotionList emotion={emotion} onClick={onClick} />
    </section>
  );
};
export default React.memo(EditorEmotionItem);
