import styled from "styled-components";

const Descript = ({ descript, color, size }) => {
  return (
    <Text color={color} size={size}>
      {descript}
    </Text>
  );
};

const Text = styled.span`
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => props.color || "#fff"};
`;
export default Descript;
