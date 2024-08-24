import styled from "styled-components";

export const CursorDiv = styled.div`
  position: fixed;
  border: 3px solid var(--color-sunflower);
  mix-blend-mode: difference;
  width: 10px;
  height: 10px;
  margin: -10px 0 0 -10px;
  border-radius: 50%;
  will-change: transform;
  user-select: none;
  pointer-events: none;
  z-index: 999;
`;
