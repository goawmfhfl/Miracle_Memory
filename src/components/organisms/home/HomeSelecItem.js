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
  display: flex;
  justify-content: space-between;

  margin-top: 20px;

  @media (min-width: 360px) and (max-width: 600px) {
    margin-top: 0px;
  }
`;
const LeftCol = styled.div`
  display: flex;
  width: 50%;
`;
const RightCol = styled.div`
  width: 50%;
  & > button {
    width: 100%;
  }
`;

export default React.memo(HomeSelectItem);
