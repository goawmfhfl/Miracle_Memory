import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { getMonthDate } from "../../util/date";
import Button from "../molecule/etc/Button";
import CommonHeader from "../organisms/common/CommonHeader";
import MemoListItem from "../organisms/item/MemoListItem";

const ViewContainer = () => {
  const diaryList = useSelector(({ memoryReducer }) => memoryReducer);
  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());

  useEffect(() => {
    if (diaryList?.length >= 1) {
      getMonthDate(curDate, setData, diaryList).changeMonthDate();
    }
  }, [curDate, diaryList]);

  const increaseMonth = () => {
    getMonthDate(curDate, setCurDate).increaseMonth();
  };
  const decreaseMonth = () => {
    getMonthDate(curDate, setCurDate).decreaseMonth();
  };
  return (
    <div>
      <CommonHeader
        headText={getMonthDate(curDate, setCurDate).headText}
        leftChild={<Button text={"<"} onClick={decreaseMonth} />}
        rightChild={<Button text={">"} onClick={increaseMonth} />}
      />
      <MemoListItem diaryList={data} />
    </div>
  );
};

export default ViewContainer;
