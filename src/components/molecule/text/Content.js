import styled from "styled-components";

const Content = ({ content }) => {
  return (
    <Wrapper>
      <Text>{content}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #ececec;
  word-break: keep-all;
  overflow-wrap: break-word;
`;
const Text = styled.p`
  padding: 20px;
  text-align: left;
  border-radius: 5px;
  font-size: 20px;
  /* font-family: "Yeon Sung", cursive; */
  font-weight: 400;
  line-height: 2.5;
`;
export default Content;
