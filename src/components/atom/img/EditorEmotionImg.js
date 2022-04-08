import styled from "styled-components";

const EditorEmotionImg = ({ img }) => {
  return <EmotionImg src={img} />;
};

const EmotionImg = styled.img.attrs({
  alt: "이모션 이미지",
})`
  /* 390픽셀 이상 600픽셀 이하 */
  @media (min-width: 390px) and (max-width: 600px) {
    width: 38px;
    height: 38px;
    margin-bottom: 10px;
  }
  /* 600픽셀 이상 */
  @media (min-width: 600px) {
    width: 54px;
    height: 54px;
    margin-bottom: 10px;
  }
`;
export default EditorEmotionImg;
