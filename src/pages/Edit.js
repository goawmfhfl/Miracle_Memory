import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import EditorTemplate from "../components/template/EditorTemplate";
const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editData, setEditData] = useState();
  const diaryList = useSelector(({ memoryReducer }) => memoryReducer);

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
  }, [id, diaryList, navigate]);

  return (
    <>{editData && <EditorTemplate isEdit={true} editData={editData} />}</>
  );
};
export default Edit;
