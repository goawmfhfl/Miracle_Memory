import React from "react";
import Button from "../module/etc/Button";
import CommonHeader from "../organisms/common/CommonHeader";
import MemoListContainer from "../organisms/container/MemoListContainer";

const MemoryView = () => {
  const increaseMonth = () => {};
  const decreaseMonth = () => {};
  return (
    <div>
      <CommonHeader
        headText={"2022년 3월"}
        leftChild={<Button text={"<"} onClick={decreaseMonth} />}
        rightChild={<Button text={">"} onClick={increaseMonth} />}
      />
      <MemoListContainer />
    </div>
  );
};

export default MemoryView;
