import styled from "styled-components";

export const ContactContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
`;

export const ContactGrid = styled.div`
  display: grid;
  position: relative;
  width: 50vw;
  height: 70vh;
  margin-right: 50px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  z-index: 1;
`;

export const ContactElement = styled.div`
  border-radius: 5px;
  background-color: blue;
  opacity: 0.5;

  &:nth-child(1) {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background-color: red;
}

&:nth-child(2) {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
  background-color: green;
}

&:nth-child(3) {
  grid-column: 4;
  grid-row: 1 / 2;
  background-color: blue;
}

&:nth-child(4) {
grid-column: 1 / 4;
  grid-row: 3;
  background-color: yellow;
}
  
&:nth-child(5) {
  grid-column: 4;
  grid-row: 2 / 4;
  background-color: purple;
}
`;