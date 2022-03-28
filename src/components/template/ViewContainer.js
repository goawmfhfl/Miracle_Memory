import React from "react";
import Button from "../molecule/etc/Button";
import CommonHeader from "../organisms/common/CommonHeader";
import MemoListItem from "../organisms/item/MemoListItem";

const ViewContainer = () => {
  const increaseMonth = () => {};
  const decreaseMonth = () => {};
  return (
    <div>
      <CommonHeader
        headText={"2022년 3월"}
        leftChild={<Button text={"<"} onClick={decreaseMonth} />}
        rightChild={<Button text={">"} onClick={increaseMonth} />}
      />
      <MemoListItem />
    </div>
  );
};

export default ViewContainer;
