import styled from "styled-components";

export const MainContainer = styled.section`
  font-family: ${props => props.theme.fontFamily};
  button {
    font-family:  ${props => props.theme.fontFamily} !important;
  }
  background: transparent;
  width: 100vw;
  height: 500vh;
  position: relative;
`;