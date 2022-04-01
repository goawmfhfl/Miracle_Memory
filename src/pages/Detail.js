import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStringDate } from "../util/date";
import Button from "../components/atom/etc/Button";
import CommonHeader from "../components/organisms/common/CommonHeader";
import DetailContainer from "../components/template/DetailContainer";

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
  if (!detailData) {
    return <div>로딩중입니다...</div>;
  } else {
    return (
      <div>
        <CommonHeader
          headText={`${getStringDate(detailData.date).dataString()} 기록`}
          leftChild={
            <Button text={"< 뒤로가기"} type={"none"} onClick={goBack} />
          }
          rightChild={
            <Button text={"수정하기"} type={"positive"} onClick={goEdit} />
          }
        ></CommonHeader>
        <DetailContainer detailData={detailData} />
      </div>
    );
  }
};

export default DetailTemplate;
