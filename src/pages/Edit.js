import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  console.log(id);
  console.log(mode);

  return (
    <div>
      <h1>Edit</h1>
      <div>이곳은 일기 수정 페이지 입니다</div>
      <button onClick={() => setSearchParams({ id: "1", mode: "white" })}>
        setSearchParams
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        home button
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back button
      </button>
    </div>
  );
};
export default Edit;
