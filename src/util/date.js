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

export const getTime = () => {
  return {
    years: new Date().getFullYear(),
    days: new Date().getDay(),
    date: new Date().getDate(),
    months: new Date().getMonth(),
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    miliSeconds: new Date().getMilliseconds(),
  };
};

export const getCurTime = () => {
  const WEEKDAY = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  return {
    curYear: getTime().years,
    curDays: WEEKDAY[getTime().days],
    curDate: getTime().date,
    curMonths: getTime().months + 1,
    curHour: String(getTime().hours).padStart(2, "0"),
    curMinutes: String(getTime().minutes).padStart(2, "0"),
  };
};
