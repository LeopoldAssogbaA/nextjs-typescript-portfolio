'use client'

import React from 'react';
import styled from 'styled-components';
import VinylDiscComponent from '../VinylDisc';
import MusicController from '../MusicController';
import VinylCoverComponent from '../VinylCover';
import { MusicContainer } from './styled';
const PlayerContainer = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  perspective: 5000px;
  display: flex;
  flex-direction: column;
`;

const VinylsContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
`;
const VinylsSubContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  perspective: 5000px;
`;

const ControlsContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MusicPlayer: React.FC = () => {

  return (
    <MusicContainer>
    <PlayerContainer>
      <VinylsContainer>
        <VinylsSubContainer>
          <VinylDiscComponent />
          <VinylCoverComponent />
        </VinylsSubContainer>
      </VinylsContainer>
      <ControlsContainer>
        <MusicController />
      </ControlsContainer>
    </PlayerContainer>
    </MusicContainer>
  );
};

export default MusicPlayer;