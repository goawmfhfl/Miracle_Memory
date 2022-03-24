import styled from "styled-components";
import HomeEmotion from "../../module/emotion/HomeEmotion";
import Button from "../../module/etc/Button";

const MemoItemBox = ({ emotion, id }) => {
  const goDetail = () => {};
  const goEdit = () => {};
  return (
    <MomoItem>
      <HomeEmotion onClick={goDetail} emotion={emotion} />
      <BtnWrapper>
        <Button text={"수정하기"} onClick={goEdit} />
      </BtnWrapper>
    </MomoItem>
  );
};

const MomoItem = styled.div``;
const BtnWrapper = styled.div``;
export default MemoItemBox;
