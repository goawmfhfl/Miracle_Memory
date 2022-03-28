import React, { useState, useRef, useContext } from "react";
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

const EditorContainer = () => {
  const navigate = useNavigate();
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [date, setDate] = useState(getStringDate(new Date()).ISOString());
  const [emotion, setEmotion] = useState(3);

  const { onCreate } = useContext(DiaryDispatchContext);

  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  };
  const handleInputValue = (value) => {
    setContent(value);
  };

  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      // onRemove()
      navigate("/", { replace: true });
    }
  };
  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <CommonHeader
        headText={"기록 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
        rightChild={
          <Button text={"삭제하기"} type={"negative"} onClick={handleRemove} />
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
        <ContolBox handleSubmit={handleSubmit} />
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
