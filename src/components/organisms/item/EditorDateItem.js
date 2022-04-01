import React from "react";
import EditorInputDataBox from "../../molecule/editor/EditorInputDataBox";
import SubTitleBox from "../../molecule/common/SubTitleBox";
const EditorDateItem = ({ date, setDate }) => {
  return (
    <section>
      <SubTitleBox
        text={"미라클 날짜"}
        icon={process.env.PUBLIC_URL + `/assets/icon/calendar.svg`}
        mb={16}
      />
      <EditorInputDataBox setDate={setDate} date={date} />
    </section>
  );
};

export default React.memo(EditorDateItem);
