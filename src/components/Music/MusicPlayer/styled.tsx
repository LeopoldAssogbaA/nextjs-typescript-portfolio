import styled from "styled-components";

export const MusicContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const PlayerContainer = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  perspective: 5000px;
  display: flex;
  flex-direction: column;
`;

export const VinylsContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const VinylsSubContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  perspective: 5000px;
`;

export const ControlsContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;