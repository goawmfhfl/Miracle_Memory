import React, { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../../context/DiaryContext";
import Button from "../molecule/etc/Button";
import CommonHeader from "../organisms/common/CommonHeader";
import MemoListItem from "../organisms/item/MemoListItem";
import { getMonthDate } from "../../util/date";

const ViewContainer = () => {
  const diaryList = useContext(DiaryStateContext);
  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());

  useEffect(() => {
    if (diaryList.length >= 1) {
      getMonthDate.changeMonthDate(curDate, setData, diaryList);
    }
  }, [curDate, diaryList]);

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  const increaseMonth = () => {
    getMonthDate.increaseMonth(curDate, setCurDate);
  };
  const decreaseMonth = () => {
    getMonthDate.decreaseMonth(curDate, setCurDate);
  };
  return (
    <div>
      <CommonHeader
        headText={headText}
        leftChild={<Button text={"<"} onClick={decreaseMonth} />}
        rightChild={<Button text={">"} onClick={increaseMonth} />}
      />
      <MemoListItem diaryList={data} />
    </div>
  );
};

export default ViewContainer;
