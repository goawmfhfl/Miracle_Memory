import styled from "styled-components";
const CheckBox = styled.input.attrs(({ checked, onChange }) => ({
  type: "checkbox",
  checked: checked,
  onChange: (e) => onChange(e.target.checked),
}))`
  width: 15px;
  height: 15px;
`;
export default CheckBox;
