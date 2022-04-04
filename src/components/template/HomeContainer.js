import React, { useState } from "react";
import styled from "styled-components";
import HomeSelectItem from "../organisms/home/HomeSelecItem";
import HomeMemoList from "../organisms/home/HomeMemoList";
import HomeAlbumItem from "../organisms/home/HomeAlbumItem";

const HomeContainer = ({ MonthData }) => {
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");
  const [gallery, setGallery] = useState(true);
  const galleryHandler = () => {
    setGallery(!gallery);
  };

  return (
    <Article>
      <HomeSelectItem
        sortType={sortType}
        setSortType={setSortType}
        filter={filter}
        setFilter={setFilter}
      />
      <HomeAlbumItem gallery={gallery} onClick={galleryHandler} />
      <HomeMemoList
        gallery={gallery}
        filter={filter}
        sortType={sortType}
        MonthData={MonthData}
      />
    </Article>
  );
};
const Article = styled.article``;
HomeContainer.defaultProps = {
  diaryList: [],
};

export default HomeContainer;
