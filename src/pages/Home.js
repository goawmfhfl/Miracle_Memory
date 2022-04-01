import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMonthDate } from "../util/date";
import Button from "../components/atom/etc/Button";
import CommonHeader from "../components/organisms/common/CommonHeader";
import HomeContainer from "../components/template/HomeContainer";

const Home = () => {
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
    <>
      <CommonHeader
        headText={getMonthDate(curDate, setCurDate).headText}
        leftChild={<Button text={"<"} onClick={decreaseMonth} />}
        rightChild={<Button text={">"} onClick={increaseMonth} />}
      />
      <HomeContainer MonthData={data} />
    </>
  );
};

export default Home;
