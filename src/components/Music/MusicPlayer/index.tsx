'use client'

import React from 'react';
import VinylDiscComponent from '../VinylDisc';
import MusicController from '../MusicController';
import VinylCoverComponent from '../VinylCover';
import { ControlsContainer, MusicContainer, PlayerContainer, VinylsContainer, VinylsSubContainer } from './styled';


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