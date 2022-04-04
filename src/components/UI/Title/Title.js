import styled from "styled-components";
import React from "react";

const StyledTitle = styled.h1`
  text-align: center;
  padding-bottom: 10px;
`;

const Title = (props) => {
  return <StyledTitle {...props}></StyledTitle>;
};

export default Title;