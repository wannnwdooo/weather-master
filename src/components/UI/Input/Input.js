import React, { useState } from "react";
import { cityApi } from "../../../API/cityApi";
import AsyncSelect from "react-select/async";
import { getDataFromServer } from "../../../API/weatherApi";
import { useDispatch } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();

  const handleSearch = (city) => {
    dispatch(getDataFromServer(city));
  };

  const [inputValue] = useState("");
  return (
    <div>
      <AsyncSelect
        classNamePrefix="custom-select"
        placeholder="Enter city name"
        value={inputValue}
        getOptionLabel={(e) => e.name + " " + e.country}
        loadOptions={cityApi}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Input;