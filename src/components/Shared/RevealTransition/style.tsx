import styled from 'styled-components';

export const RevealTransitionContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;

  .reveal-transition {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: inset(0% 0% 0% 0%);
    z-index: 15;

    &.reveal-1 {
      background: #47167d;
      z-index: 15;
    }
    &.reveal-2 {
      background: #97397a;
      z-index: 14;
    }
    &.reveal-3 {
      background: #c37182;
      z-index: 13;
    }
    &.reveal-4 {
      background: #ddada4;
      z-index: 12;
    }
    &.reveal-5 {
      background: #f1e8e2;
      z-index: 11;
    }
  }
`;