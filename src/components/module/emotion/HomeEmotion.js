import styled from "styled-components";

const HomeEmotion = ({ emotion }) => {
  return (
    <Wrapper className={emotion}>
      <EmotionImg emotion={emotion} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  min-width: 120px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;
const EmotionImg = styled.img.attrs((props) => ({
  alt: "이모션 이미지",
  src: process.env.PUBLIC_URL + `assets/emotion${props.emotion}.png`,
}))`
  &.1 {
    background-color: #64c964;
  }
  &.2 {
    background-color: #9dd772;
  }
  &.3 {
    background-color: #fdce17;
  }
  &.4 {
    background-color: #fd8446;
  }
  &.5 {
    background-color: #fd565f;
  }
`;

export default HomeEmotion;
