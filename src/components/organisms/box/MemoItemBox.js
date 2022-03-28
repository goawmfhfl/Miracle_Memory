import styled from "styled-components";
import HomeEmotion from "../../molecule/emotion/HomeEmotion";
import Info from "../../molecule/text/Info";
import Button from "../../molecule/etc/Button";

const MemoItemBox = ({ emotion, id, date, content }) => {
  const goDetail = () => {};
  const goEdit = () => {};
  return (
    <MomoItem>
      <HomeEmotion onClick={goDetail} emotion={emotion} />
      <Info onClick={goDetail} date={"date"} content={"content"} />
      <BtnWrapper>
        <Button text={"수정하기"} onClick={goEdit} />
      </BtnWrapper>
    </MomoItem>
  );
};

const MomoItem = styled.li`
  padding-top: 15px;
  padding-bottom: 15px;

  border-bottom: 1px solid #e2e2e2;

  display: flex;
  justify-content: space-between;
`;
const BtnWrapper = styled.div`
  min-width: 70px;
`;
export default MemoItemBox;
