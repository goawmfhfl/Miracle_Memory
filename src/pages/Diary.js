import React from "react";
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Diary</h1>
      <div>이곳은 일기 상세 페이지입니다</div>
    </div>
  );
};
export default Diary;
