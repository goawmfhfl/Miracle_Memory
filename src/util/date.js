export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
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
