import styled from "styled-components";

const Option = styled.option.attrs(({ value }) => ({
  value: value,
}))``;

export default Option;
