import styled from "styled-components";

const TextArea = ({ contentRef, content, onChange }) => {
  return (
    <TextWrapper>
      <TextInputArea ref={contentRef} value={content} onChange={onChange} />
    </TextWrapper>
  );
};

const TextWrapper = styled.div``;
const TextInputArea = styled.textarea.attrs({ type: "오늘은 어떠셨나요?" })`
  font-family: "Nanum Pen Script", cursive;
  font-size: 20px;

  box-sizing: border-box;
  width: 100%;
  min-height: 200px;
  resize: vertical;

  border: none;
  border-radius: 5px;
  background-color: #ececec;

  padding: 20px;
`;

export default TextArea;
