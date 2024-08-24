'use client'

import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ButtonContainer, InfoContainer, MusicControllerContainer, NextButton, PlayButton, PreviousButton, SubContainer, TitleContainer } from './styled';

const MusicController: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState();


  const handlePlay = () => {
    const playTimeline = gsap.timeline();
    const currentTrackTimeline = gsap.timeline({ delay: 0.5 });
    if (!isPlaying) {
      playTimeline.to(['.vinyl-cover:not(.cover-1)', '.vinyl-disc:not(.disc-1)'], {
        left: '-500px',
        transform: 'rotate3d(0, 1, 0, 50deg)',
        duration: 0.75,
        ease: 'back.inOut(2)'
      });
      currentTrackTimeline.to(['.cover-1', '.disc-1'], {
        left: '0%',
        zIndex: 10,
        transform: 'rotate3D(1, 1, 1, 0deg)',
        duration: 0.5
      });
      currentTrackTimeline.to('.disc-1', {
        left: '50%',
        duration: 0.5,
      });
      currentTrackTimeline.to('.disc-1', {
        left: '50%',
        transform: 'rotate3d(1, 0, 0, -45deg)',
        duration: 0.5,
      });
      currentTrackTimeline.to('.disc-1', {
        animation: 'spin 2s linear infinite',
        duration: 0.1,
      });
      setIsPlaying(true);
    } else {

      const currentTrackTimeline = gsap.timeline();
      currentTrackTimeline.to('.disc-1', {
        animationPlayState: 'paused',
        duration: 0.1,
      });
      currentTrackTimeline.to('.disc-1', {
        transform: 'rotateX(50deg) rotate(0deg)',
        duration: 0.1,
      });
      currentTrackTimeline.to('.disc-1', {
        animation: 'none',
        duration: 0.1,
      });
      currentTrackTimeline.to('.disc-1', {
        transform: 'rotate3d(1, 0, 0, 0deg)',
        duration: 0.5,
      });
      currentTrackTimeline.to('.disc-1', {
        left: '2',
        duration: 0.5,
      });
      currentTrackTimeline.to(['.cover-1', '.disc-1'], {
        left: '0',
        zIndex: 6,
        transform: "rotate3d(0, 1, 0, -50deg)",
        duration: 0.5
      });
      currentTrackTimeline.to('.disc-1', {
        left: '+=10px',
        duration: 0.5,
      });
      gsap.to(['.vinyl-cover:not(.cover-1)'], {
        left: (index) => `${(index + 1) * 50}px`,
        transform: 'rotate3d(0, 1, 0, -50deg)',
        zIndex: (index) => 6 - (index + 1),
        duration: 0.75,
        ease: 'back.inOut(2)',
        delay: 1.6
      });
      gsap.to(['.vinyl-disc:not(.disc-1)'], {
        left: (index) => `${(index + 1) * 50 + 10}px`,
        transform: 'rotate3d(0, 1, 0, -50deg)',
        zIndex: (index) => 6 - (index + 1),
        duration: 0.75,
        ease: 'back.inOut(2)',
        delay: 1.6
      });

      setIsPlaying(false);
    }
  };

  const onNext = () => {
    console.log('next');
  };
  const onPlay = () => {
    console.log('play');
    setIsPlaying(s => !s);
    handlePlay();
  };
  const onPrevious = () => {
    console.log('previous');
  };
  useGSAP(() => {
    // Ajoutez vos animations GSAP ici
  }, []);

  return (
    <MusicControllerContainer>
      <SubContainer>
        <TitleContainer className='music-title'>Title</TitleContainer>
        <InfoContainer className='music-info'>Info sur le titre en cours qui doit etre affiché et tenir sur une seule ligne</InfoContainer>
        <ButtonContainer>
          <PreviousButton className='previous button' onClick={onPrevious}>Previous</PreviousButton>
          <PlayButton className='play button' onClick={onPlay}>
            {isPlaying ? 'Pause' : 'Play'}
          </PlayButton>
          <NextButton className='next button' onClick={onNext}>Next</NextButton>
        </ButtonContainer>
      </SubContainer>
    </MusicControllerContainer>
  );
};

export default MusicController;
