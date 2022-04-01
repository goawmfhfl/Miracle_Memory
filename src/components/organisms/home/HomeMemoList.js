import React from "react";
import getProcessedDiaryList from "../../../util/optionList";
import HomeMemoItem from "./HomeMemoItem";

const HomeMemoList = ({ filter, sortType, MonthData }) => {
  return (
    <ul>
      {getProcessedDiaryList(filter, sortType, MonthData).map((list) => (
        <HomeMemoItem key={list.id} {...list} />
      ))}
    </ul>
  );
};

export default HomeMemoList;
