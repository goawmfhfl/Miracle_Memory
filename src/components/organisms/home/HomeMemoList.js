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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5%;
  }
  overflow-y: auto;
  padding: 10px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.palette["box"]};
  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};
  overflow-y: auto;
  height: 450px;

  @media (min-width: 600px) {
    height: 800px;
  }
`;

export default HomeMemoList;
