import React from "react";
import CommonHeader from "../organisms/common/CommonHeader";
import Button from "../module/etc/Button";
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
    </div>
  );
};
export default MemoryDetail;
