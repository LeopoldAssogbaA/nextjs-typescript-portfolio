import styled from 'styled-components';

export const MainNav = styled.nav`
  z-index: 3;
  margin: 0px;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: start;
  align-items: center;
  ul {
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
  }
`;
export const Step = styled.li`
  background: transparent;
  mix-blend-mode: difference;
  z-index: 3;
  margin: 6px 0;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 150px;
  line-height: 1.5em;
  font-size: 1.3em;
  transition: all 0.2s ease;
  color: #47167d;
  width: auto;
  height: auto;
  margin-right: 1em;

  &:first-of-type {
    margin-left: 1em;
  }

  &.current-step {
   &:before {
      width: 100%;
      transition: all 0.2s ease;
    }
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: #47167d;
  }
  &:hover {
    &:before {
      width: 100%;
      transition: all 0.2s ease;
    }
  }
`;