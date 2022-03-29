import React, { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../context/DiaryContext";
import EditorContainer from "../components/template/EditorContainer";
const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editData, setEditData] = useState();
  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (list) => parseInt(list.id) === parseInt(id)
      );
      if (targetDiary) {
        setEditData(targetDiary);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <>{editData && <EditorContainer isEdit={true} editData={editData} />}</>
  );
};
export default Edit;
