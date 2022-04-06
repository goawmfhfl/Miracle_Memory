import styled from "styled-components";

const Title = ({ text }) => {
  return <Text>{text}</Text>;
};
const Text = styled.h1`
  width: 100%;
  font-size: 20px;
  justify-content: center;
  font-family: "MaruBuri-Bold";
`;
export default Title;
