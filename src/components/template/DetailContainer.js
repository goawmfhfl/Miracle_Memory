import React from "react";
import styled from "styled-components";
import emotionList from "../../util/emotionList";
import DetailEmotionItem from "../organisms/item/DetailEmotionItem";
import DetailContentItem from "../organisms/item/DetailContentItem";

const DetailContainer = ({ detailData }) => {
  const curEmotionData = emotionList.find(
    (list) => parseInt(list.emotion_id) === parseInt(detailData.emotion)
  );
  return (
    <Article>
      <DetailEmotionItem
        img={curEmotionData?.emotion_img}
        id={curEmotionData?.emotion_id}
        descript={curEmotionData?.emotion_descript}
      />
      <DetailContentItem content={detailData.content} />
    </Article>
  );
};

const Article = styled.article`
  & > section {
    width: 100%;
    margin-bottom: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export default DetailContainer;
