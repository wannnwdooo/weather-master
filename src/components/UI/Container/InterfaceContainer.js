import styled from "styled-components";

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