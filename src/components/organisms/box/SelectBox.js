import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { sortOptionList, filterOptionList } from "../../../util/optionList";
import Button from "../../molecule/etc/Button";
import Select from "../../molecule/etc/Select";

const SelectBox = ({ sortType, setSortType, filter, setFilter }) => {
  const navigate = useNavigate();
  const goNew = () => {
    navigate("/new");
  };
  return (
    <Wrapper>
      <LeftCol>
        <Select
          value={sortType}
          onChange={setSortType}
          optionList={sortOptionList}
        />
        <Select
          value={filter}
          onChange={setFilter}
          optionList={filterOptionList}
        />
      </LeftCol>
      <RightCol>
        <Button type={"positive"} text={"새로운 기록 남기기"} onClick={goNew} />
      </RightCol>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;

  display: flex;
  justify-content: space-between;
`;
const LeftCol = styled.div``;
const RightCol = styled.div`
  flex-grow: 1;
  & > button {
    width: 100%;
  }
`;

export default SelectBox;
