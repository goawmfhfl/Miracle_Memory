import styled from "styled-components";

const Icon = styled.img.attrs((props) => ({
  src: props.icon,
}))`
  width: 25px;
  height: 25px;
  margin-right: ${(props) => props.mr && props.mr};
`;

export default Icon;
