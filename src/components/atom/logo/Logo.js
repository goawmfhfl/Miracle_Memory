import styled from "styled-components";

const Logo = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
`;

export default Logo;
