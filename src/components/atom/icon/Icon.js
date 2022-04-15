import styled from "styled-components";

const Icon = styled.img.attrs(({ icon }) => ({
  src: icon,
}))`
  width: 25px;
  height: 25px;
  margin-right: ${(props) => `${props.mr && props.mr}px`};

  @media (min-width: 360px) and (max-width: 600px) {
    width: 18px;
    height: 18px;
  }
`;

export default Icon;
