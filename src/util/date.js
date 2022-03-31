export const getStringDate = (date) => {
  // 2022-03-28
  const ISOString = () => {
    return new Date(date).toISOString().slice(0, 10);
  };

  // 2022. 03. 28
  const dataString = () => {
    return new Date(parseInt(date)).toLocaleDateString().slice(0, -1);
  };

  return { ISOString, dataString };
};

export const getMonthDate = (curDate, setData, diaryList) => {
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  const increaseMonth = () => {
    setData(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1),
      curDate.getDate()
    );
  };

  const decreaseMonth = () => {
    setData(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1),
      curDate.getDate()
    );
  };
  const changeMonthDate = () => {
    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
    ).getTime();

    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth() + 1,
      0,
      23,
      59,
      59
    ).getTime();
    setData(
      diaryList.filter((list) => firstDay <= list.date && list.date <= lastDay)
    );
  };
  return { increaseMonth, decreaseMonth, changeMonthDate, headText };
};
