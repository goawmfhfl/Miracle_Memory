import styled from "styled-components";

const TextArea = styled.textarea.attrs(({ content, onChange, reference }) => ({
  ref: reference,
  value: content,
  onChange: (e) => {
    onChange(e.target.value);
  },
  placeholder: "미라클 모닝을 기록해보세요",
}))`
  font-family: "Amsterdam";
  font-weight: bolder;
  font-size: 20px;

  box-sizing: border-box;
  width: 100%;
  min-height: 200px;
  resize: vertical;

  border: none;
  border-radius: 15px;
  background-color: ${(props) => props.theme.palette["box"]};
  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};

  padding: 20px;

  @media (min-width: 360px) and (max-width: 600px) {
    min-height: 130px;
  }
`;
export default TextArea;
