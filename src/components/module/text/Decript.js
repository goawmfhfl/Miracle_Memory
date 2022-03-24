import styled from "styled-components";

const Decript = styled.span`
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => props.color || "#fff"};
`;
export default Decript;
