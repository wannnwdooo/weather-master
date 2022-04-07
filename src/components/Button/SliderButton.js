import React from "react";
import { StyledInput, StyledSlider, StyledSwitch } from "./SliderButtonStyles";


const SliderButton = ({ themeToggle }) => {
  return (<StyledSwitch>
    <StyledInput type="checkbox" onChange={themeToggle} />
    <StyledSlider />
  </StyledSwitch>);
};

export default SliderButton;


