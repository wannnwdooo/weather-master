import React from "react";
import styled from "styled-components";

const StyledSwitch = styled.label`
  bottom: 10px;
  right: 10px;
  position: absolute;
  display: inline-block;
  width: 60px;
  height: 34px;
`;
const StyledSlider = styled.span`
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: #c58ec3;
  transition: 0.4s;

  border-radius: 34px;

  &:before {
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    bottom: 4px;
    left: 4px;
    background: #120118;
    transition: 0.4s;
  }
`;
const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked {
    + ${StyledSlider}:before {
      transform: translateX(26px);
    }

    + ${StyledSlider} {
      background: #5167cc;
    }
  }
`;
const SliderButton = ({ themeToggle }) => {
  return (
    <StyledSwitch>
      <StyledInput type="checkbox" onChange={themeToggle} />
      <StyledSlider />
    </StyledSwitch>
  );
};

export default SliderButton;


