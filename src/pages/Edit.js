import React, { useEffect, useContext, useState } from "react";
import { DiaryStateContext } from "../context/DiaryContext";
import { useNavigate, useParams } from "react-router-dom";
import EditorContainer from "../components/template/EditorContainer";
const Edit = () => {
  const { id } = useParams();
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (list) => parseInt(list.id) === parseInt(id)
      );
      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);
  return (
    originData && <EditorContainer isEdit={true} originData={originData} />
  );
};
export default Edit;
