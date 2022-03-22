import React from "react";
import { useNavigate } from "react-router-dom";
import Mybutton from "./Mybutton";

const DiaryItem = ({ content, date, emotion, id }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  return (
    <div className="DiaryItem">
      <div
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
        onClick={() => goDetail()}
      >
        <img
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          alt="감정 이미지"
        />
      </div>
      <div className="info_wrapper" onClick={() => goDetail()}>
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <Mybutton
          text={"수정하기"}
          onClick={() => {
            goEdit();
          }}
        />
      </div>
    </div>
  );
};
export default DiaryItem;
