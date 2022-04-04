import _ from "lodash";
export const sortOptionList = [
  { value: "latest", name: "최신순" },
  {
    value: "oldest",
    name: "오래된 순",
  },
];

export const filterOptionList = [
  { value: "all", name: "전부 다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안좋은 감정만" },
];

const getProcessedDiaryList = (filter, sortType, diaryList) => {
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
  const copyList = _.cloneDeep(diaryList);

  let filterList =
    filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));
  const sortedList = filterList.sort(compare);

  return sortedList;
};

export default getProcessedDiaryList;
