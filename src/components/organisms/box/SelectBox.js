import styled from "styled-components";
import Option from "../../module/etc/Option";
import { sortOptionList } from "../../../util/optionList";

const SelectBox = () => {
  return (
    <ControlMenu>
      {sortOptionList &&
        sortOptionList.map((list, index) => {
          <Option key={index} value={list.value} name={list.name} />;
        })}
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

export default SelectBox;
