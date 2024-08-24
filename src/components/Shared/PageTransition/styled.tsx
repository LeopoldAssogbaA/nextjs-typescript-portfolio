import styled from "styled-components";

export const ContainerEnter = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 100vh); 
  background-color: transparent;

  div {
    height: 0%;
    background-color: var(--color-deep-blue);
   
  }
`;

export const ContainerLeave = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(10, 10vh); 
  background-color: transparent;

  div {
    width: 100%;
    background-color: var(--color-deep-blue);
   
  }
`;