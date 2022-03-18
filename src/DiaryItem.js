import React from "react";

const DiaryItem = ({
  author,
  id,
  content,
  created_date,
  emotion,
  onRemove,
}) => {
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
      <button
        onClick={() => {
          console.log(id);
          if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onRemove(id);
          }
        }}
      >
        삭제하기
      </button>
    </div>
  );
};
export default DiaryItem;
