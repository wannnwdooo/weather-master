import React from "react";
import { useSelector } from "react-redux";
import {
  selectCityName,
  selectHumidityWeather,
  selectIconWeather,
  selectMainWeather,
  selectTemperatureWeather,
  selectWindWeather
} from "../../store/select";
import { CityName, Humidity, NoValues, Temperature, Weather, WindSpeed } from "./DescriptionStyles";

export const Description = () => {
  const cityName = useSelector(selectCityName);
  const mainWeather = useSelector(selectMainWeather);
  const iconWeather = useSelector(selectIconWeather);
  const temperatureWeather = useSelector(selectTemperatureWeather);
  const humidityWeather = useSelector(selectHumidityWeather);
  const windWeather = useSelector(selectWindWeather);


  if (!cityName) {
    return <NoValues>Choose city</NoValues>;
  }
  return (<div>
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
  </div>);
};

export default Description;