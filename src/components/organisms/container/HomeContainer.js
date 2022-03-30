import React, { useState } from "react";
import HomeSelectItem from "../item/HomeSelecItem";
import HomeMemoList from "../list/HomeMemoList";

const HomeContainer = ({ MonthData }) => {
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");
  return (
    <>
      <HomeSelectItem
        sortType={sortType}
        setSortType={setSortType}
        filter={filter}
        setFilter={setFilter}
      />
      <HomeMemoList filter={filter} sortType={sortType} MonthData={MonthData} />
    </>
  );
};

HomeContainer.defaultProps = {
  diaryList: [],
};

export default HomeContainer;
