import styled from "styled-components";
import CommonHeader from "../organisms/common/CommonHeader";
import Button from "../module/etc/Button";
import DetailEmotionBox from "../organisms/box/DetailEmotionBox";
import DetailContentBox from "../organisms/box/DetailContentBox";
import { useNavigate } from "react-router-dom";

const MemoryDetail = () => {
  const navigate = useNavigate();

  const goEdit = () => {
    // navigate(`/edit/${data.id}`);
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="detail">
      <CommonHeader
        headText={"2022-01-22 기록"}
        leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
        rightChild={<Button text={"수정하기"} onClick={goEdit} />}
      ></CommonHeader>
      <Article>
        <DetailEmotionBox
          img={process.env.PUBLIC_URL + `/assets/emotion1.png`}
          emotion={"1"}
          descript={"descript"}
        />
        <DetailContentBox content={"content"} />
      </Article>
    </div>
  );
};

const Article = styled.article`
  & > section {
    width: 100%;
    margin-bottom: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export default MemoryDetail;
