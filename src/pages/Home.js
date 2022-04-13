import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMonthDate } from "../util/date";
import Icon from "../components/atom/icon/Icon";
import Button from "../components/atom/etc/Button";
import CommonHeader from "../components/organisms/common/CommonHeader";
import CommonNavigation from "../components/organisms/common/CommonNavigation";
import HomeSplashItem from "../components/organisms/home/HomeSplashItem";
import HomeContainer from "../components/template/HomeContainer";
const Home = ({ loading, visible }) => {
  const diaryList = useSelector(({ memoryReducer }) => memoryReducer);
  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());

  useEffect(() => {
    if (diaryList?.length >= 1) {
      getMonthDate(curDate, setData, diaryList).changeMonthDate();
    }
  }, [curDate, diaryList]);

  const increaseMonth = () => {
    getMonthDate(curDate, setCurDate).increaseMonth();
  };
  const decreaseMonth = () => {
    getMonthDate(curDate, setCurDate).decreaseMonth();
  };

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.textContent = `Home - Miracle Memory `;
  }, []);

  return (
    <>
      {loading ? (
        <HomeSplashItem visible={visible} />
      ) : (
        <>
          <CommonHeader
            headText={getMonthDate(curDate, setCurDate).headText}
            leftChild={
              <Button type={"none"} onClick={decreaseMonth}>
                <Icon
                  icon={
                    process.env.PUBLIC_URL + `/assets/icon/chevron-left.svg`
                  }
                />
              </Button>
            }
            rightChild={
              <Button type={"none"} onClick={increaseMonth}>
                <Icon
                  icon={
                    process.env.PUBLIC_URL + `/assets/icon/chevron-right.svg`
                  }
                />
              </Button>
            }
          />
          <HomeContainer MonthData={data} />
          <CommonNavigation />
        </>
      )}
    </>
  );
};

export default Home;
