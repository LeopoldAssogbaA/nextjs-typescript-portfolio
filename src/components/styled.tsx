import styled from "styled-components";

export const MainContainer = styled.section`
font-family: ${props => props.theme.fontFamily};
  background: transparent;
  width: 100vw;
  height: 500vh;
  position: relative;
  .school {
    display: none;
  }
`;