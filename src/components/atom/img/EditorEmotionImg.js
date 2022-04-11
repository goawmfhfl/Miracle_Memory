import styled from "styled-components";

const EditorEmotionImg = ({ img }) => {
  return <EmotionImg src={img} />;
};

const EmotionImg = styled.img.attrs({
  alt: "이모션 이미지",
})`
  @media (min-width: 360px) and (max-width: 600px) {
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
  }
  @media (min-width: 600px) {
    width: 54px;
    height: 54px;
    margin-bottom: 10px;
  }
`;
export default EditorEmotionImg;
