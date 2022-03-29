import React, { useState } from "react";
import getProcessedDiaryList from "../../../util/optionList";
import MemoItemBox from "../box/MemoItemBox";
import SelectBox from "../box/SelectBox";

const MemoListItem = ({ diaryList }) => {
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");
  return (
    <ul>
      <SelectBox
        sortType={sortType}
        setSortType={setSortType}
        filter={filter}
        setFilter={setFilter}
      />
      {getProcessedDiaryList(filter, sortType, diaryList).map((list) => (
        <MemoItemBox key={list.id} {...list} />
      ))}
    </ul>
  );
};

MemoListItem.defaultProps = {
  diaryList: [],
};

export default MemoListItem;
