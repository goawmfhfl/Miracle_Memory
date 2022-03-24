import styled from "styled-components";
import SelectBox from "../box/SelectBox";
import Button from "../../module/etc/Button";
import { sortOptionList, filterOptionList } from "../../../util/optionList";

const ContolContainer = ({
  sortType,
  setSortType,
  filter,
  setFilter,
  goNew,
}) => {
  return (
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
export default ContolContainer;
