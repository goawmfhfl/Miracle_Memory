import styled from "styled-components";

const Select = ({ value, onChange, optionList }) => {
  return (
    <ControlMenu value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList &&
        optionList.map((list, index) => (
          <option key={index} value={list.value}>
            {list.name}
          </option>
        ))}
    </ControlMenu>
  );
};

const ControlMenu = styled.select`
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  background-color: #ececec;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  cursor: pointer;
  /* font-family: "Nanum Pen Script", cursive; */
  font-size: 18px;
`;

export default Select;
