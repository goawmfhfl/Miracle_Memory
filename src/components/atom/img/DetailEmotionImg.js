import styled from "styled-components";
const DetailEmotionImg = ({ img, id }) => {
  return <EmotionImg className={`emotion_${id}`} src={img} />;
};
export default DetailEmotionImg;

const EmotionImg = styled.img.attrs({ alt: "이모션 이미지" })`
  width: 150px;
  height: 150px;
`;
