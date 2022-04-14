import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CommonText from "../../atom/text/CommonText";
import Icon from "../../atom/icon/Icon";

const TodoWeatherBox = () => {
  const [data, setData] = useState({});
  const { main } = data;

  useEffect(() => {
    const getCoordsInfo = () => {
      const location = JSON.parse(localStorage.getItem("location"));
      const fetchedData = axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=6720dd6382b0a7536a9ab1184aed41a1&units=metric`
        )
        .then((response) => setData(response.data));
    };
    getCoordsInfo();
  }, []);

  return (
    <Wrapper>
      <CommonText>
        현재온도 {main?.temp} 최고기온 {main?.temp_max} 최저기온{" "}
        {main?.temp_min}
      </CommonText>
      <Icon></Icon>
    </Wrapper>
  );
};

export default TodoWeatherBox;

const Wrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.palette["box"]};
  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};
`;
