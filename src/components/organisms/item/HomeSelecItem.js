import React from "react";
import { useNavigate } from "react-router-dom";
import { sortOptionList, filterOptionList } from "../../../util/optionList";
import styled from "styled-components";
import Button from "../../atom/etc/Button";
import HomeSelectBox from "../../molecule/home/HomeSelectBox";

const HomeSelectItem = ({ sortType, setSortType, filter, setFilter }) => {
  const navigate = useNavigate();
  const goNew = () => {
    navigate("/new");
  };
  return (
    <Wrapper>
      <LeftCol>
        <HomeSelectBox
          value={sortType}
          onChange={setSortType}
          optionList={sortOptionList}
        />
        <HomeSelectBox
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

const Wrapper = styled.section`
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

export default React.memo(HomeSelectItem);
