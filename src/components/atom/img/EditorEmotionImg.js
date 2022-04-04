import styled from "styled-components";

const EditorEmotionImg = ({ img }) => {
  return <EmotionImg src={img} />;
};

const EmotionImg = styled.img.attrs({
  alt: "이모션 이미지",
})`
  width: 54px;
  height: 54px;
  margin-bottom: 10px;
`;
export default EditorEmotionImg;
