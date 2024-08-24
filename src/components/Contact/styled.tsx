import styled from "styled-components";

export const ContactContainer = styled.div`
  display: none;
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  justify-content: flex-end;
  align-items: center;
  z-index: 0;
`;

export const ContactGrid = styled.div`
  display: grid;
  position: relative;
  width: 60vw;
  height: 75vh;
  margin-bottom: 50px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  z-index: 10;
`;

export const ContactElement = styled.div`
  border-radius: 16px;
  z-index: 10;
  overflow: hidden;
  opacity: 1;
  margin: 5px;

  &:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    background-color: var(--color-sunflower);
    margin-right: 0;
    margin-left: 10px;
  }

&:nth-child(2) {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
  z-index: 0;
  overflow: auto;
  margin-left: 0;
  padding-left: 10px;
}

&:nth-child(3) {
  grid-column: 4;
  grid-row: 1 / 2;
  background-color: var(--color-deep-blue);
}

&:nth-child(4) {
grid-column: 1 / 4;
  grid-row: 3;
  background-color: var(--color-sky-blue);
}
  
&:nth-child(5) {
  grid-column: 4;
  grid-row: 2 / 4;
  background-color: var(--color-ocean-blue);
}
`;