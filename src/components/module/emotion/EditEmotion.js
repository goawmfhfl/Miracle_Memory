import styled from "styled-components";

const EditEmotion = ({
  emotion_id,
  emotion_img,
  emotion_descript,
  onClick,
  isSelected,
}) => {
  return (
    <EmotionItem
      onClick={() => onClick(emotion_id)}
      className={isSelected ? `on_${emotion_id}` : "off"}
    >
      <EmotionImg src={emotion_img} />
      <EmotionDescript>{emotion_descript}</EmotionDescript>
    </EmotionItem>
  );
};
const EmotionItem = styled.li`
  cursor: pointer;

  border-radius: 5px;
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.off {
    background-color: #ececec;
  }
  &.on_1 {
    background-color: #63c964;
    color: white;
  }
  &.on_2 {
    background-color: #9dd772;
    color: white;
  }
  &.on_3 {
    background-color: #fdce17;
    color: white;
  }
  &.on_4 {
    background-color: #fd8446;
    color: white;
  }
  &.on_5 {
    background-color: #fd565f;
    color: white;
  }
`;

const EmotionImg = styled.img.attrs((props) => ({
  alt: "이모션 이미지",
}))`
  width: 50%;
  margin-bottom: 10px;
`;

const EmotionDescript = styled.span`
  font-size: 18px;
`;

export default EditEmotion;
