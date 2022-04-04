import React from "react";
import styled from "styled-components";
import getProcessedDiaryList from "../../../util/optionList";
import HomeGalleryItem from "./HomeGalleryItem";
import HomeMemoItem from "./HomeMemoItem";

const HomeMemoList = ({ gallery, filter, sortType, MonthData }) => {
  return (
    <MemoList className={gallery ? "list" : "gallery"}>
      {getProcessedDiaryList(filter, sortType, MonthData).map((list) =>
        gallery ? (
          <HomeMemoItem key={list.id} {...list} />
        ) : (
          <>
            <HomeGalleryItem key={list.id} {...list} />
          </>
        )
      )}
    </MemoList>
  );
};

const MemoList = styled.ul`
  &.gallery {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default HomeMemoList;
