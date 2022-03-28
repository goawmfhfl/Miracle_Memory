export const getStringDate = (date) => {
  const stringDate = parseInt(date);
  const ISODate = date;

  // 2022-03-28
  const ISOString = () => {
    return new Date(ISODate).toISOString().slice(0, 10);
  };

  // 2022. 03. 28
  const DataString = () => {
    return new Date(stringDate).toLocaleDateString().slice(0, -1);
  };

  return { ISOString, DataString };
};

export const getMonthDate = {
  increaseMonth(curDate, setCurDate) {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1),
      curDate.getDate()
    );
  },
  decreaseMonth(curDate, setCurDate) {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1),
      curDate.getDate()
    );
  },
  changeMonthDate(curDate, setData, diaryList) {
    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
    ).getTime();

    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth() + 1,
      0
    ).getTime();
    setData(
      diaryList.filter((list) => firstDay <= list.date && list.date <= lastDay)
    );
  },
};
