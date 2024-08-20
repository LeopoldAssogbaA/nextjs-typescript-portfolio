import styled from 'styled-components';

export const LanguageContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 3;
`;

export const LanguageSubContainer = styled.div`
  z-index: 3;
  position: relative;
  display: flex;
  width: 100%;
  height: 1.45em;
`;

export const LanguageButton = styled.button`
  display: flex;
  z-index: 3;
  background: transparent;
  mix-blend-mode: difference;
  border: none;
  color: #47167d;
  font-size: 1em;
  width: auto;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  opacity: 0;

  &.current-locale {
    &:before {
      width: 80%;
      transition: all 0.2s ease;
    }
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 0%;
    height: 2px;
    background: #47167d;
  }
  &:hover {
    &:before {
      width: 80%;
      transition: all 0.2s ease;
    }
  }
`;