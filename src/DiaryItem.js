import React from "react";

const DiaryItem = ({ author, id, content, created_date, emotion }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          id:{id} | 작성자: {author} | 감성점수 : {emotion}
        </span>
        <br />
        <span className="date"> {new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};
export default DiaryItem;
