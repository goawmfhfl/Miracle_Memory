import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../molecule/etc/Button";
import MemoItemBox from "../box/MemoItemBox";
import SelectBox from "../box/SelectBox";
import { sortOptionList, filterOptionList } from "../../../util/optionList";

const MemoListItem = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(diaryList));
    let filterList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));
    const sortedList = filterList.sort(compare);

    return sortedList;
  };

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
      <MemoItemBox />
      <MemoItemBox />
      <MemoItemBox />
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
