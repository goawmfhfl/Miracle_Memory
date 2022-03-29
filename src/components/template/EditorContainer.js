import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onCreate, onEdit, onRemove } from "../../module/memoryReducer";
import { getStringDate } from "../../util/date";
import styled from "styled-components";
import Button from "../molecule/etc/Button";
import CommonHeader from "../organisms/common/CommonHeader";
import DateBox from "../organisms/box/DateBox";
import TextAreaBox from "../organisms/box/TextAreaBox";
import EmotionBox from "../organisms/box/EmotionBox";
import ContolBox from "../organisms/box/ControlBox";

const EditorContainer = ({ isEdit, editData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contentRef = useRef();
  const [date, setDate] = useState(getStringDate(new Date()).ISOString());
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3);
  const handleClickEmote = useCallback((emotion) => {
    setEmotion(emotion);
  }, []);
  const handleInputValue = (value) => {
    setContent(value);
  };

  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(onRemove(editData.id));
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
        !isEdit ? "새로운 일기를 작성하시겠습니까?" : "일기를 수정하시겠습니까?"
      )
    ) {
      if (!isEdit) {
        dispatch(onCreate(date, content, emotion));
      } else {
        dispatch(onEdit(editData.id, date, content, emotion));
      }
      navigate("/", { replace: true });
    }
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
          isEdit && (
            <Button
              text={"삭제하기"}
              type={"negative"}
              onClick={handleRemove}
            />
          )
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
