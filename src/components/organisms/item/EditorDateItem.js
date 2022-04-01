import React from "react";
import EditorInputDataBox from "../../molecule/editor/EditorInputDataBox";
const EditorDateItem = ({ date, setDate }) => {
  return (
    <section>
      <EditorInputDataBox setDate={setDate} date={date} />
    </section>
  );
};

export default React.memo(EditorDateItem);
