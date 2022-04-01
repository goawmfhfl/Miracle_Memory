import React from "react";
import DateInput from "../../atom/etc/DateInput";
import SubTitleBox from "../common/SubTitleBox";

const EditorInputDataBox = ({ date, setDate }) => {
  return (
    <div>
      <SubTitleBox
        text={"미라클 날짜"}
        icon={process.env.PUBLIC_URL + `/assets/icon/calendar.svg`}
      />
      <DateInput date={date} setDate={setDate} />
    </div>
  );
};
export default EditorInputDataBox;
