import styled from "styled-components";

const SubText = ({ text }) => {
  return <Text>{text}</Text>;
};

const Text = styled.h4`
  font-size: 22px;
  font-weight: bold;
`;

export default SubText;
