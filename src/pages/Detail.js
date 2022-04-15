import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStringDate, getWeekDayStr } from "../util/date";
import Button from "../components/atom/etc/Button";
import CommonHeader from "../components/organisms/common/CommonHeader";
import DetailContainer from "../components/template/DetailContainer";
import CommonNavigation from "../components/organisms/common/CommonNavigation";

const DetailTemplate = () => {
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
  }, [diaryList, id, navigate]);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.textContent = `View - Miracle Memory`;
  }, []);

  if (!detailData) {
    return <div>로딩중입니다...</div>;
  } else {
    return (
      <>
        <CommonHeader
          headText={`${getStringDate(detailData.date).dataString()} ${
            getWeekDayStr().WEEKDAY[new Date(detailData.date).getDay()]
          }`}
          leftChild={
            <Button type={"default"} onClick={goBack}>
              &lt; 뒤로가기
            </Button>
          }
          rightChild={
            <Button type={"positive"} onClick={goEdit}>
              수정하기
            </Button>
          }
        ></CommonHeader>
        <DetailContainer detailData={detailData} />
        <CommonNavigation />
      </>
    );
  }
};

export default DetailTemplate;
