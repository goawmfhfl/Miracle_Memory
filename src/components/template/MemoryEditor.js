import React from "react";
import styled from "styled-components";
import CommonHeader from "../organisms/common/CommonHeader";
import Button from "../module/etc/Button";
import { useNavigate } from "react-router-dom";
import DateBox from "../organisms/box/DateBox";
import EmotionContainer from "../organisms/container/EmotionContainer";

const MemoryEditor = () => {
  const navigate = useNavigate();

  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      // onRemove()
      navigate("/", { replace: true });
    }
  };
  return (
    <div>
      <CommonHeader
        headText={"기록 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} />}
        rightChild={
          <Button text={"삭제하기"} type={"negative"} onClick={handleRemove} />
        }
      />
      <Article>
        <DateBox />
        <EmotionContainer emotion={"emotion"} />
      </Article>
    </div>
  );
};
const Article = styled.article`
  & > section {
    margin-bottom: 40px;
  }
`;

export default MemoryEditor;
