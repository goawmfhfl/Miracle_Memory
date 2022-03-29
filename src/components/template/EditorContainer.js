import React, { useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../../context/DiaryContext";
import { getStringDate } from "../../util/date";
import styled from "styled-components";
import Button from "../molecule/etc/Button";
import CommonHeader from "../organisms/common/CommonHeader";
import DateBox from "../organisms/box/DateBox";
import TextAreaBox from "../organisms/box/TextAreaBox";
import EmotionBox from "../organisms/box/EmotionBox";
import ContolBox from "../organisms/box/ControlBox";

const EditorContainer = ({ isEdit, editData }) => {
  const navigate = useNavigate();

  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [date, setDate] = useState(getStringDate(new Date()).ISOString());
  const [emotion, setEmotion] = useState(3);

  const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);

  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  };
  const handleInputValue = (value) => {
    setContent(value);
  };

  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(editData.id);
      navigate("/", { replace: true });
    }
  };
  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까" : "새로운 일기를 작성하시겠습니까?"
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(editData.id, date, content, emotion);
      }
    }
    navigate("/", { replace: true });
  };

  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(editData.date).ISOString());
      setEmotion(editData.emotion);
      setContent(editData.content);
    }
  }, [isEdit, editData]);
  return (
    <div>
      <CommonHeader
        headText={isEdit ? "일기 수정하기" : "새 일기쓰기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
        rightChild={
          isEdit ? (
            <Button
              text={"삭제하기"}
              type={"negative"}
              onClick={handleRemove}
            />
          ) : null
        }
      />
      <Article>
        <DateBox date={date} setDate={setDate} />
        <EmotionBox emotion={emotion} onClick={handleClickEmote} />
        <TextAreaBox
          content={content}
          onChange={handleInputValue}
          reference={contentRef}
        />
        <ContolBox handleSubmit={handleSubmit} goHome={goHome} />
      </Article>
    </div>
  );
};
const Article = styled.article`
  & > section {
    margin-bottom: 40px;
  }
`;

export default EditorContainer;
