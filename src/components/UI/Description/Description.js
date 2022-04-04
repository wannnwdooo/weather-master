import React from "react";
import { useSelector } from "react-redux";
import {
  selectCityName,
  selectHumidityWeather,
  selectIconWeather,
  selectMainWeather,
  selectTemperatureWeather,
  selectWindWeather
} from "../../../store/select";
import styled from "styled-components";

export const Description = () => {
  const cityName = useSelector(selectCityName);
  const mainWeather = useSelector(selectMainWeather);
  const iconWeather = useSelector(selectIconWeather);
  const temperatureWeather = useSelector(selectTemperatureWeather);
  const humidityWeather = useSelector(selectHumidityWeather);
  const windWeather = useSelector(selectWindWeather);

  const NoValues = styled.h2`
    text-align: center;
    font-size: 30px;
    padding-top: 15px;
  `;
  const CityName = styled.h2`
    text-align: center;
    padding-top: 10px;
    font-size: 40px;
  `;
  const Temperature = styled.h2`
    font-size: 36px;
    display: flex;
    justify-content: center;
  `;
  const Weather = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 30px;
  `;
  const Humidity = styled.p`
    font-size: 20px;
  `;
  const WindSpeed = styled.p`
    font-size: 20px;
  `;


  if (!cityName) {
    return <NoValues>Choose city</NoValues>;
  }
  return (
    <div>
      <CityName>{cityName}</CityName>
      <Temperature>{temperatureWeather}℃</Temperature>
      <Weather>
        <img
          src={`https://api.openweathermap.org/img/w/${iconWeather}.png`}
          alt="icon"
        />
        {mainWeather}
      </Weather>
      <Humidity>Humidity: {humidityWeather}%</Humidity>
      <WindSpeed>Wind speed: {windWeather}m/s</WindSpeed>
    </div>
  );
};

export default Description;