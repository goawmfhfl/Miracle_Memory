import styled from "styled-components";

const Option = ({ value, name }) => {
  return <OptionItem value={value}>{name}</OptionItem>;
};

const OptionItem = styled.option``;

export default Option;
