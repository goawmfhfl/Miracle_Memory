import styled from "styled-components";

const SubTitle = ({ text }) => {
  return <Text>{text}</Text>;
};

const Text = styled.h4`
  font-size: 22px;
  font-weight: bold;
  margin: 25px;
`;

export default SubTitle;
