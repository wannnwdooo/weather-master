import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { weatherSlice } from "./weatherSlice";

export const rootReducer = combineReducers({
  slice: weatherSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});