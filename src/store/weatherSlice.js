import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weatherDescription",
  initialState: {
    name: null,
  },
  reducers: {
    cityName(state, action) {
      state.name = action.payload.name;
    },
    mainWeather(state, action) {
      state.main = action.payload.weather[0].main;
    },
    iconWeather(state, action) {
      state.icon = action.payload.weather[0].icon;
    },
    temperatureWeather(state, action) {
      state.temp = Math.trunc(action.payload.main.temp - 273.15);
    },
    humidityWeather(state, action) {
      state.humidity = action.payload.main.humidity;
    },
    windWeather(state, action) {
      state.wind = Math.trunc(action.payload.wind.speed);
    },
  },
});
export const {
  cityName,
  mainWeather,
  iconWeather,
  temperatureWeather,
  humidityWeather,
  windWeather,
} = weatherSlice.actions;

export default weatherSlice.reducer;
