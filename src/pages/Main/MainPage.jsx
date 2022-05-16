import Description from "../../components/Description/Description";
import SliderButton from "../../components/Button/SliderButton";

import React, { useState } from "react";
import { AppWrapper, InterfaceContainer, StyledTitle } from "./MainPageStyles";
import { cityApi } from "../../API/cityApi";
import AsyncSelect from "react-select/async";
import { getDataFromServer } from "../../API/weatherApi";
import { useDispatch } from "react-redux";

const MainPage = (props) => {

  const Title = (props) => {
    return <StyledTitle {...props} />;
  };

  const [inputValue] = useState("");

  const dispatch = useDispatch();
  const handleSearch = (city) => {
    dispatch(getDataFromServer(city));
  };

  return (<AppWrapper>
    <InterfaceContainer>
      <Title>Weather App</Title>
      <AsyncSelect
        classNamePrefix="custom-select"
        placeholder="Enter city name"
        value={inputValue}
        getOptionLabel={(e) => e.name + " " + e.country}
        loadOptions={cityApi}
        onChange={handleSearch}
      />
      <Description />
      <SliderButton themeToggle={props.themeToggle} />
    </InterfaceContainer>
  </AppWrapper>);
};

export default MainPage;
