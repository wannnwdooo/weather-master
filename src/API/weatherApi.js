import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  cityName, humidityWeather, iconWeather, mainWeather, temperatureWeather, windWeather
} from "../store/weatherSlice";

export const getDataFromServer = createAsyncThunk(`weatherDescription/getDataFromServer`, async ({
                                                                                                   lat, lon
                                                                                                 }, { dispatch }) => {
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`;
  const apiKey = "9995ad9e9c273c0c3114083c55d0ccaf";
  const url = `${apiUrl}${apiKey}`;

  let response = await axios.get(url);
  response = response.data;

  dispatch(cityName(response));
  dispatch(mainWeather(response));
  dispatch(iconWeather(response));
  dispatch(temperatureWeather(response));
  dispatch(humidityWeather(response));
  dispatch(windWeather(response));
});