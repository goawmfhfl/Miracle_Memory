import React from "react";
import Mybutton from "./Mybutton";

const DiaryItem = ({ content, date, emotion, id }) => {
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  return (
    <div className="DiaryItem">
      <div
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        <img
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          alt="감정 이미지"
        />
      </div>
      <div className="info_wrapper">
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <Mybutton />
      </div>
    </div>
  );
};
export default DiaryItem;
