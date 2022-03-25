import styled from "styled-components";
import CommonHeader from "../organisms/common/CommonHeader";
import Button from "../module/etc/Button";
import DetailEmotionBox from "../organisms/box/DetailEmotionBox";
import { useNavigate } from "react-router-dom";

const MemoryDetail = () => {
  const navigate = useNavigate();

  const goEdit = () => {
    // navigate(`/edit/${data.id}`);
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="detail">
      <CommonHeader
        headText={"2022-01-22 기록"}
        leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
        rightChild={<Button text={"수정하기"} onClick={goEdit} />}
      ></CommonHeader>
      <article>
        <DetailEmotionBox
          img={process.env.PUBLIC_URL + `/assets/emotion1.png`}
          emotion={"1"}
          descript={"descript"}
        />
      </article>
    </div>
  );
};

export default MemoryDetail;
