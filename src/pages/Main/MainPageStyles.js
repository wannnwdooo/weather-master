import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
`;

export const InterfaceContainer = styled.div`
  background: rgba(24, 24, 24, 0.82);
  border-radius: 30px;
  width: 100%;
  max-width: 420px;
  margin: 1em;
  position: relative;
  padding: 2em 2em 50px;

  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.container};
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.shadow};
`;
export const StyledTitle = styled.h1`
  text-align: center;
  padding-bottom: 10px;
`;
