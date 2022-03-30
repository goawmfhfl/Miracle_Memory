import React from "react";
import SubTitle from "../../molecule/text/SubTitle";
import EditorInputDataBox from "../../molecule/box/EditorInputDataBox";
const EditorDateItem = ({ date, setDate }) => {
  return (
    <section>
      <SubTitle text={"오늘은 언제인가요?"} />
      <EditorInputDataBox onChange={setDate} date={date} />
    </section>
  );
};

export default React.memo(EditorDateItem);
