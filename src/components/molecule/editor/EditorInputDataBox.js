import React from "react";
import DateInput from "../../atom/etc/DateInput";

const EditorInputDataBox = ({ date, setDate }) => {
  return (
    <div>
      <DateInput date={date} onChange={setDate} />
    </div>
  );
};
export default EditorInputDataBox;
