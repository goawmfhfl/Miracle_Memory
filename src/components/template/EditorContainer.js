import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onCreate, onEdit, onRemove } from "../../module/memoryReducer";
import { getStringDate } from "../../util/date";
import styled from "styled-components";
import Button from "../atom/etc/Button";
import CommonHeader from "../organisms/common/CommonHeader";
import EditorDateItem from "../organisms/editor/EditorDateItem";
import EditorTitleItem from "../organisms/editor/EditorTitleItem";
import EditorEmotionItem from "../organisms/editor/EditorEmotionItem";
import EditorTextAreaItem from "../organisms/editor/EditorTextAreaItem";
import EditorControlBox from "../molecule/editor/EditorControlBox";

const EditorContainer = ({ isEdit, editData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contentRef = useRef();
  const titleRef = useRef();
  const [date, setDate] = useState(getStringDate(new Date()).ISOString());
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3);

  const handleClickEmote = useCallback((emotion) => {
    setEmotion(emotion);
  }, []);

  const handleInputValue = useCallback((value) => {
    setContent(value);
  }, []);

  const handleInputTitle = useCallback((value) => {
    setTitle(value);
  }, []);

  const handleRemove = useCallback(() => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(onRemove(editData.id));
      navigate("/", { replace: true });
    }
  }, [dispatch, navigate, editData.id]);

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (title.length < 1) {
      titleRef.current.focus();
      return;
    }
    if (
      window.confirm(
        !isEdit ? "새로운 일기를 작성하시겠습니까?" : "일기를 수정하시겠습니까?"
      )
    ) {
      if (!isEdit) {
        dispatch(onCreate(date, title, content, emotion));
      } else {
        dispatch(onEdit(editData.id, date, title, content, emotion));
      }
      navigate("/", { replace: true });
    }
  };

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  const goHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(editData.date).ISOString());
      setTitle(editData.title);
      setEmotion(editData.emotion);
      setContent(editData.content);
    }
  }, [isEdit, editData]);
  return (
    <div>
      <CommonHeader
        headText={isEdit ? "일기 수정하기" : "새 일기쓰기"}
        leftChild={
          <Button text={"< 뒤로가기"} type={"none"} onClick={goBack} />
        }
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
        <EditorDateItem date={date} setDate={setDate} />
        <EditorTitleItem
          title={title}
          onChange={handleInputTitle}
          reference={titleRef}
        />
        <EditorEmotionItem emotion={emotion} onClick={handleClickEmote} />
        <EditorTextAreaItem
          content={content}
          onChange={handleInputValue}
          reference={contentRef}
        />
        <EditorControlBox
          handleSubmit={handleSubmit}
          goHome={goHome}
          leftChild={<Button text={"취소하기"} onClick={goHome} />}
          rightChild={
            <Button
              text={"작성완료"}
              type={"positive"}
              onClick={handleSubmit}
            />
          }
        />
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
