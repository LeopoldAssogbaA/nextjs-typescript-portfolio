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
      background: var(--color-deep-blue);
      z-index: 15;
    }
    &.reveal-2 {
      background: var(--color-ocean-blue);
      z-index: 14;
    }
    &.reveal-3 {
      background: var(--color-sky-blue);
      z-index: 13;
    }
    &.reveal-4 {
      background: var(--color-cream);
      z-index: 12;
    }
    &.reveal-5 {
      background: var(--color-sunflower);
      z-index: 11;
    }
  }
`;





