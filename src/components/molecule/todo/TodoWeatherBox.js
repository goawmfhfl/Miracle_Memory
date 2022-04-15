import React, { useMemo } from "react";
import styled from "styled-components";
import axios from "axios";
import CommonText from "../../atom/text/CommonText";
import Icon from "../../atom/icon/Icon";
import usePromise from "../../../hooks/usePromise";

const TodoWeatherBox = () => {
  const location = useMemo(() => {
    JSON.parse(localStorage.getItem("location"));
  }, []);
  const [loading, response, error] = usePromise(() => {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_OPENWHEATER_API}&units=metric`
    );
  }, location);

  if (loading) {
    return <>데이터를 불러오는 중입니다</>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <>에러가 발생했습니다.</>;
  }

  const { temp_max, temp_min } = response.data.main;
  const { icon, main } = response.data.weather[0];

  return (
    <Wrapper>
      <FirstChild>
        <WeatherIcon
          icon={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        ></WeatherIcon>
      </FirstChild>
      <SecondChild>
        <FirstText className="nowrap">{main}</FirstText>
        <SecondText>최저 : {temp_min}</SecondText>
        <ThirdText>최고 : {temp_max}</ThirdText>
      </SecondChild>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.palette["main"]};
  box-shadow: ${(props) => props.theme.shadow["boxShadow"]};
  @media (min-width: 360px) and (max-width: 600px) {
  }
`;

const WeatherIcon = styled(Icon)`
  width: 80px;
  height: 80px;
  background-color: #fff;

  border-radius: 15px;
  @media (min-width: 360px) and (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

const FirstChild = styled.div``;
const SecondChild = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > span {
    margin-bottom: 5px;
  }
`;

const FirstText = styled(CommonText)`
  color: #fff;
  font-size: 30px;

  @media (min-width: 360px) and (max-width: 600px) {
    font-size: 20px;
  }
`;
const SecondText = styled(CommonText)`
  color: #fff;
  font-size: 18px;
  @media (min-width: 360px) and (max-width: 600px) {
    font-size: 13px;
  }
`;
const ThirdText = styled(CommonText)`
  color: #fff;
  font-size: 18px;
  @media (min-width: 360px) and (max-width: 600px) {
    font-size: 13px;
  }
`;

export default TodoWeatherBox;
