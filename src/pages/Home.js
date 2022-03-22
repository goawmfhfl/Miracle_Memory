import React, { useState } from "react";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/Mybutton";

const Home = () => {
  const [curDate, setCurDate] = useState(new Date());

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;
  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={
          <MyButton
            text={"<"}
            onClick={() => {
              decreaseMonth();
            }}
          />
        }
        rightChild={
          <MyButton
            text={">"}
            onClick={() => {
              increaseMonth();
            }}
          />
        }
      />
      <div>이곳은 홈 입니다</div>
    </div>
  );
};
export default Home;
