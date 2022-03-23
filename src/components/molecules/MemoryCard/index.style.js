import styled from "styled-components";

export const MemoryItem = styled.li`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e2e2e2;

  display: flex;
  justify-content: space-between;
`;

export const EmotionImgWrapper = styled.div`
  cursor: pointer;
  min-width: 120px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  justify-content: center;

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
export const EmotionImg = styled.img.attrs((props) => ({
  alt: "미라클이미지",
  src: process.env.PUBLIC_URL + `assets/emotion${props.emotion}.png`,
}))``;

export const InfoWrapper = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  cursor: pointer;
`;

export const MemoryDate = styled.p`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 5px;
`;

export const MemoryContentPreview = styled.span`
  font-size: 18px;
`;

export const BtnWrapper = styled.div`
  min-width: 70px;
`;
