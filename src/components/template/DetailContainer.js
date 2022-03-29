import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStringDate } from "../../util/date";
import emotionList from "../../util/emotion";
import styled from "styled-components";
import CommonHeader from "../organisms/common/CommonHeader";
import Button from "../molecule/etc/Button";
import DetailEmotionBox from "../organisms/box/DetailEmotionBox";
import DetailContentBox from "../organisms/box/DetailContentBox";
import { useSelector } from "react-redux";

const DetailContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const diaryList = useSelector(({ memoryReducer }) => memoryReducer);
  const [detailData, setDetailData] = useState([]);

  const goEdit = () => {
    navigate(`/edit/${detailData.id}`);
  };
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (diaryList) {
      const targetDiary = diaryList.find(
        (list) => parseInt(list.id) === parseInt(id)
      );
      if (targetDiary) {
        setDetailData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [diaryList, id]);

  if (!detailData) {
    return <div>로딩중입니다...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (list) => parseInt(list.emotion_id) === parseInt(detailData.emotion)
    );
    return (
      <div>
        <CommonHeader
          headText={`${getStringDate(detailData.date).dataString()} 기록`}
          leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
          rightChild={<Button text={"수정하기"} onClick={goEdit} />}
        ></CommonHeader>
        <Article>
          <DetailEmotionBox
            img={curEmotionData?.emotion_img}
            id={curEmotionData?.emotion_id}
            descript={curEmotionData?.emotion_descript}
          />
          <DetailContentBox content={detailData.content} />
        </Article>
      </div>
    );
  }
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
