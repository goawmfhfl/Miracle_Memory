import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sortOptionList, filterOptionList } from "../../../util/optionList";
import { getProcessedDiaryList } from "../../../util/optionList";
import Button from "../../molecule/etc/Button";
import MemoItemBox from "../box/MemoItemBox";
import SelectBox from "../box/SelectBox";

const MemoListItem = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");
  const goNew = () => {
    navigate("/new");
  };
  return (
    <MemoList>
      <Wrapper>
        <LeftCol>
          <SelectBox
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <SelectBox
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </LeftCol>
        <RightCol>
          <Button
            type={"positive"}
            text={"새로운 기록 남기기"}
            onClick={goNew}
          />
        </RightCol>
      </Wrapper>
      {getProcessedDiaryList(filter, sortType, diaryList).map((list) => (
        <MemoItemBox key={list.id} {...list} />
      ))}
    </MemoList>
  );
};

const MemoList = styled.ul``;
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

MemoListItem.defaultProps = {
  diaryList: [],
};

export default MemoListItem;
