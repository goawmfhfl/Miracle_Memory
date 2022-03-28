export const getStringDate = (date) => {
  const clouserDate = date;

  // 2022-03-28
  const ISOString = () => {
    return new Date(clouserDate).toISOString().slice(0, 10);
  };

  // 2022. 03. 28
  const DataString = () => {
    return new Date(parseInt(clouserDate)).toLocaleDateString().slice(0, -1);
  };

  return { ISOString, DataString };
};

export const getMonthDate = (curDate, setData, diaryList) => {
  const closureCurDate = curDate;
  const closureSetData = setData;
  const closureDiaryList = diaryList;

  const headText = `${closureCurDate.getFullYear()}년 ${
    closureCurDate.getMonth() + 1
  }월`;

  const increaseMonth = () => {
    closureSetData(
      new Date(closureCurDate.getFullYear(), closureCurDate.getMonth() + 1),
      closureCurDate.getDate()
    );
  };

  const decreaseMonth = () => {
    closureSetData(
      new Date(closureCurDate.getFullYear(), closureCurDate.getMonth() - 1),
      closureCurDate.getDate()
    );
  };
  const changeMonthDate = () => {
    const firstDay = new Date(
      closureCurDate.getFullYear(),
      closureCurDate.getMonth(),
      1
    ).getTime();

    const lastDay = new Date(
      closureCurDate.getFullYear(),
      closureCurDate.getMonth() + 1,
      0
    ).getTime();
    setData(
      closureDiaryList.filter(
        (list) => firstDay <= list.date && list.date <= lastDay
      )
    );
  };
  return { increaseMonth, decreaseMonth, changeMonthDate, headText };
};
