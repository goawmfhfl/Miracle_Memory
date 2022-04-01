import React, { useState } from "react";
import styled from "styled-components";
import HomeSelectItem from "../organisms/home/HomeSelecItem";
import HomeMemoList from "../organisms/home/HomeMemoList";

const HomeContainer = ({ MonthData }) => {
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");
  return (
    <Article>
      <HomeSelectItem
        sortType={sortType}
        setSortType={setSortType}
        filter={filter}
        setFilter={setFilter}
      />
      <HomeMemoList filter={filter} sortType={sortType} MonthData={MonthData} />
    </Article>
  );
};
const Article = styled.article``;

HomeContainer.defaultProps = {
  diaryList: [],
};

export default HomeContainer;
