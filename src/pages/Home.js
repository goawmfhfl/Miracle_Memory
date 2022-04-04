import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMonthDate } from "../util/date";
import Icon from "../components/atom/icon/Icon";
import Button from "../components/atom/etc/Button";
import CommonHeader from "../components/organisms/common/CommonHeader";
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
              <Button
                text={
                  <Icon
                    icon={
                      process.env.PUBLIC_URL + `/assets/icon/chevron-left.svg`
                    }
                  />
                }
                type={"none"}
                onClick={decreaseMonth}
              />
            }
            rightChild={
              <Button
                text={">"}
                text={
                  <Icon
                    icon={
                      process.env.PUBLIC_URL + `/assets/icon/chevron-right.svg`
                    }
                  />
                }
                type={"none"}
                onClick={increaseMonth}
              />
            }
          />
          <HomeContainer MonthData={data} />
        </>
      )}
    </>
  );
};

export default Home;
