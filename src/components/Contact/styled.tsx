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
  width: 70vw;
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
  color: var(--color-cream);

  &:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    background-color: var(--color-sunflower);
    margin-right: 0;
    margin-left: 10px;
    color: var(--color-deep-blue);

    a, button {
      margin-bottom: 8px;
      color: var(--color-deep-blue) !important;
      &:hover {
        color: var(--color-deep-blue) !important;
      }
      &:active {
        color: var(--color-deep-blue) !important;
      }
    }
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

  a, button {
    margin-bottom: 8px; 
    color: var(--color-cream) !important;
    &:hover {
      color: var(--color-cream) !important;
    }
    &:active {
      color: var(--color-cream) !important;
    }
  }
}

&:nth-child(4) {
  grid-column: 1 / 4;
  grid-row: 3;
  background-color: var(--color-sky-blue);

  .info-reveal {
    margin-bottom: 8px;
  }

  button {
    margin-bottom: 8px;
  }

   a, button {
    color: var(--color-cream) !important;
    &:hover {
      color: var(--color-cream) !important;
    }
    &:active {
      color: var(--color-cream) !important;
    }
  }
}
  
&:nth-child(5) {
  grid-column: 4;
  grid-row: 2 / 4;
  background-color: var(--color-ocean-blue);

  a {
    margin-bottom: 8px;
    color: var(--color-cream) !important;
    &:hover {
      color: var(--color-cream) !important;
    }
    &:active {
      color: var(--color-cream) !important;
    }
  }
}
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: auto;
  padding: 8px;
  margin-bottom: 32px;

  .reference-card-header {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: baseline;
    width: 100%;
    height: auto;

    span {
      margin: 0 12px;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    font-weight: 800;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      a {
        margin-bottom: 8px;
        color: var(--color-cream);
        &:hover {
          color: var(--color-cream);
        }
        &:active {
          color: var(--color-cream);
        }
      }
    }
  }

  svg {
    margin-right: 8px;
    font-size: 16px;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0 0 12px 0;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 8px 0;
    text-decoration: underline;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 8px 0;
  }

  button {
    background-color: transparent;
    font-size: 1rem;
    font-family: inherit !important;
    padding: 0;
    margin-bottom: 8px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  .references-container {
    width: 98%;
    height: auto;
  }

  .reference-card {
    margin-bottom: 12px;
  }

  .info-reveal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    height: auto;
  }
`;