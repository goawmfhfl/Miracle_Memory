import styled from "styled-components";

// "미라클 모닝 제목을 입력해주세요",
const TitleInput = styled.input.attrs(
  ({ title, titleRef, onChange, placeholder }) => ({
    ref: titleRef,
    value: title,
    onChange: (e) => {
      onChange(e.target.value);
    },
    placeholder: placeholder,
  })
)`
  font-family: "Amsterdam";
  font-weight: bolder;
  font-size: 20px;

  box-sizing: border-box;
  width: 100%;
  resize: vertical;

  border: none;
  border-radius: 15px;
  background-color: ${(props) => props.theme.palette["box"]};
  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};

  padding: 20px;

  @media (min-width: 360px) and (max-width: 600px) {
    padding: 15px;
    font-size: 16px;
  }
`;
export default TitleInput;
