import React from "react";
import styled from "styled-components";
import getProcessedDiaryList from "../../../util/optionList";
import HomeMemoItem from "./HomeMemoItem";

const HomeMemoList = ({ gallery, filter, sortType, MonthData }) => {
  return (
    <MemoList className={gallery ? "list" : "gallery"}>
      {getProcessedDiaryList(filter, sortType, MonthData).map((list) =>
        gallery ? (
          <HomeMemoItem key={list.id} {...list} />
        ) : (
          <>
            <div>정말 재밌죠?</div>
          </>
        )
      )}
    </MemoList>
  );
};

const MemoList = styled.ul``;

export default HomeMemoList;
