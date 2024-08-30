import styled from "styled-components";

export const SchoolContainer = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 50vh;
  top: 50vh;
  padding: 0 64px;
  z-index: 3;
`;

export const SchoolCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SchoolCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30vw;
  height: 30vh;
  border: 2px solid rgba(0, 0, 163, 0.1);
  background: rgba(0, 0, 163, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 163, 0.3);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(5px);
  color: var(--color-deep-blue);
  padding: 8px;
  font-size: 1em;

  &:nth-child(1) {
    z-index: 3;
  }
  &:nth-child(2) {
    z-index: 4;
  }
  p {
    color: var(--color-deep-blue);
  }

  h3 {
    margin: 0;
    font-size: 1.3em;
    font-weight: 600;
    color: var(--color-deep-blue)
  }

  svg {
    margin-right: 8px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-decoration: none;
    font-weight: 800;
    color: var(--color-deep-blue) !important;
    &:hover {
      color: var(--color-deep-blue) !important;
    }
    &:active {
      color: var(--color-deep-blue) !important;
    }
  }
`;

export const SchoolText = styled.div`
  position: fixed;
  top: 25vh;
  left: 15vh;
  width: 50vw;
  height: 65vh;
  p {
    display: block;
    margin-bottom: 0.5em;
    font-size: 1.2em;
    color: var(--color-deep-blue);
  }

  .school-icons-container {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 32px 0;
    width: 100%;
    display: flex !important;
    justify-content: center;
  }
    
  .school-icons {
    margin: 0 16px;
    color: var(--color-deep-blue);
    font-size: 3em;
  }
`;