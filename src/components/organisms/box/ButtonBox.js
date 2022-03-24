import styled from "styled-components";
import Button from "../../module/etc/Button";

const ButtonBox = ({ goHome, handleSubmit }) => {
  return (
    <Wrapper>
      <Button text={"취소하기"} type={"positive"} onClick={goHome}></Button>
      <Button
        text={"작성완료"}
        type={"positive"}
        onClick={handleSubmit}
      ></Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default ButtonBox;
