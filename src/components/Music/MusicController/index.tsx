'use client'

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ButtonContainer, InfoContainer, MusicControllerContainer, NextButton, PlayButton, PreviousButton, SubContainer, TitleContainer } from './styled';
import { IoPlaySkipBack, IoPlaySkipForwardSharp, IoPlay, IoPause } from "react-icons/io5";
import { MUSIC, NEEDLE_DOWN } from '../../..//utils/constants';

const MusicController: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDiscIndex, setCurrentDiscIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState<HTMLAudioElement | undefined>(undefined);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const [needleDown] = useState<HTMLAudioElement>(new Audio(NEEDLE_DOWN));
  const [currentMusic, setCurrentMusic] = useState(MUSIC[currentDiscIndex]);

  const handleUpdateText = (discIndex: number) => {
    const tl = gsap.timeline();

    tl.to(['.music-title', '.music-info', '.music-quote'], {
      opacity: 0,
      x: -150,
      stagger: 0.02,
      duration: 0.5,
      delay: 2.5,
      overwrite: 'auto'
    })
    .call(() => setCurrentMusic(MUSIC[discIndex]))
    .to(['.music-title', '.music-info', '.music-quote'], {
      opacity: 1,
      x: 0,
      stagger: 0.02,
      duration: 0.5,
    })

    return () => {
      tl.kill();
    };
  }

  const getPosition = (index: number, isDisc: boolean) => {
    const positions = [
      `calc(50% - 100px${isDisc ? ' - 10px' : ''})`,
      `calc(50% - 50px${isDisc ? ' - 10px' : ''})`,
      isDisc ? 'calc(50% - 10px)' : '50%',
      `calc(50% + 50px${isDisc ? ' - 10px' : ''})`,
      `calc(50% + 100px${isDisc ? ' - 10px' : ''})`
    ];
    return positions[index] || '50%';
  };

  const positionAllDisc = (callback: () => void) => {
    gsap.to(['.vinyl-cover'], {
      left: (index) => getPosition(index, true),
      transform: 'rotate3d(0, 1, 0, -50deg) translateX(-50%)',
      zIndex: (index) => 6 - (index + 1),
      duration: 0.75,
      ease: 'back.inOut(2)',
      delay: 1.6
    });
    gsap.to(['.vinyl-disc'], {
      left: (index) => getPosition(index, false),
      transform: 'rotate3d(0, 1, 0, -50deg) translateX(-50%)',
      zIndex: (index) => 6 - (index + 1),
      duration: 0.75,
      ease: 'back.inOut(2)',
      delay: 1.6,
      onComplete: () => {
        setIsAnimationPlaying(false);
        callback();
      }
    });
  };

  const removeAllDisc = (discIndex: number, callback: () => void) => {
    const removeAllTimeline = gsap.timeline({
      onComplete: () => {
        setIsAnimationPlaying(false);
        callback();
      }
    });
    const discClass = MUSIC[discIndex].key;
    removeAllTimeline.to([
      `.vinyl-cover:not(.cover-${discClass})`,
      `.vinyl-disc:not(.disc-${discClass})`
    ], {
      left: '-500px',
      transform: 'rotate3d(0, 1, 0, 50deg)',
      duration: 0.75,
      ease: 'back.inOut(2)'
    });
  };

  const removeDisc = (discIndex: number, callback: () => void) => {
    const removeTimeline = gsap.timeline({
      onComplete: () => {
        setIsAnimationPlaying(false);
        callback();
      }
    });
    const discClass = MUSIC[discIndex].key;
    removeTimeline.to(`.disc-${discClass}`, {
      animationPlayState: 'paused',
      duration: 0.1,
    });
    removeTimeline.to(`.disc-${discClass}`, {
      transform: 'rotateX(50deg) rotate(0deg)',
      duration: 0.1,
    });
    removeTimeline.to(`.disc-${discClass}`, {
      animation: 'none',
      duration: 0.1,
    });
    removeTimeline.to(`.disc-${discClass}`, {
      transform: 'rotate3d(1, 0, 0, 0deg)',
      duration: 0.5,
    });
    removeTimeline.to(`.disc-${discClass}`, {
      left: '12%',
      duration: 0.5,
    });
    removeTimeline.to([`.cover-${discClass}`, `.disc-${discClass}`], {
      left: '10%',
      zIndex: 6,
      transform: "rotate3d(0, 1, 0, -50deg)",
      duration: 0.5
    });
    removeTimeline.to(`.disc-${discClass}`, {
      left: '+=10px',
      duration: 0.5,
    });
  };

  const positionDisc = (discIndex: number, callback: () => void) => {
    const positionTimeline = gsap.timeline({
      onComplete: () => {
        setIsAnimationPlaying(false);
        callback();
      }
    });
    const discClass = MUSIC[discIndex].key;
    positionTimeline.to([`.cover-${discClass}`, `.disc-${discClass}`], {
      top: '-=20px',
      zIndex: 10,
      duration: 0.5
    });
    positionTimeline.to([`.cover-${discClass}`, `.disc-${discClass}`], {
      left: '10%',
      top: '+=20px',
      zIndex: 10,
      transform: 'rotate3D(1, 1, 1, 0deg)',
      duration: 0.5
    });
    positionTimeline.to(`.disc-${discClass}`, {
      left: '50%',
      duration: 0.5,
    });
    positionTimeline.to(`.disc-${discClass}`, {
      left: '50%',
      transform: 'rotate3d(1, 0, 0, -45deg)',
      duration: 0.5,
    });
    positionTimeline.to(`.disc-${discClass}`, {
      animation: 'spin 2s linear infinite',
      duration: 0.1,
    });
  };

  const handlePlayAnimation = (discIndex: number) => {
    if (!isPlaying) {
      removeAllDisc(discIndex, () => console.log("all disc remove"));
      positionDisc(discIndex, () => console.log("disc position"));
    } else {
      removeDisc(discIndex, () => console.log("disc remove"));
      positionAllDisc(() => console.log("all disc position"));
    }
  };

  const handleAudioPlay = (discIndex: number) => {
    const newTrack = new Audio(MUSIC[discIndex].audio);
    setCurrentTrack(newTrack);
  };

  const handleAudioPause = () => {
    currentTrack?.pause();
    setCurrentTrack(undefined);
    setIsPlaying(false);
    needleDown.pause();
    needleDown.currentTime = 0;
  };

  const handleAudio = (discIndex: number) => {
    if (!isPlaying) {
      handleAudioPlay(discIndex);
    } else {
      handleAudioPause();
    }
  };

  const onNext = () => {
    needleDown.pause();
    const nextIndex = (currentDiscIndex + 1) % MUSIC.length;
    setCurrentDiscIndex(nextIndex);
    handleUpdateText(nextIndex);

    if (isPlaying) {
      handleAudioPause();
      removeDisc(currentDiscIndex, () => {
        handleAudioPlay(nextIndex);
        positionDisc(nextIndex, () => console.log("disc position"));
        removeAllDisc(nextIndex, () => console.log("all disc remove"));
      });
    } else {
      handlePlayAnimation(nextIndex);
      handleAudio(nextIndex);
    }
  };

  const onPrevious = () => {
    needleDown.pause();
    const previousIndex = (currentDiscIndex - 1 + MUSIC.length) % MUSIC.length;
    setCurrentDiscIndex(previousIndex);
    handleUpdateText(previousIndex);

    if (isPlaying) {
      handleAudioPause();
      removeDisc(currentDiscIndex, () => {
        handleAudioPlay(previousIndex);
        positionDisc(previousIndex, () => console.log("disc position"));
        removeAllDisc(previousIndex, () => console.log("all disc remove"));
      });
    } else {
      handlePlayAnimation(previousIndex);
      handleAudio(previousIndex);
    }
  };

  const onPlay = () => {
    if (isAnimationPlaying) return;
    setIsAnimationPlaying(true);
    handlePlayAnimation(currentDiscIndex);
    handleAudio(currentDiscIndex);
  };

  useEffect(() => {
    if (currentTrack && (isPlaying || !isPlaying)) {
      const timeout = setTimeout(() => {
        currentTrack.play();
        needleDown.play();
        setIsPlaying(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentTrack, needleDown, isPlaying]);

  useEffect(() => {
    if (currentTrack) {
      const handleEnded = () => {
        onNext();
      };
      currentTrack.addEventListener('ended', handleEnded);
      return () => {
        currentTrack.removeEventListener('ended', handleEnded);
      };
    }
  }, [currentTrack]);

  return (
    <MusicControllerContainer>
      <SubContainer>
        <TitleContainer className='music-title'>{currentMusic.title}</TitleContainer>
        <InfoContainer className='music-info'>{currentMusic.artist}</InfoContainer>
        <ButtonContainer>
          <PreviousButton className='previous button hover-effect' onClick={onPrevious}>
            <IoPlaySkipBack />
            <span>Previous</span>
          </PreviousButton>
          <PlayButton className='play button hover-effect' onClick={onPlay}>
            {isPlaying ? <IoPause /> : <IoPlay />}
            <span>{isPlaying ? 'Pause' : 'Play'} </span>
          </PlayButton>
          <NextButton className='next button hover-effect' onClick={onNext}>
            <IoPlaySkipForwardSharp />
            <span>Next</span>
          </NextButton>
        </ButtonContainer>
        <h5 className='music-quote'>{currentMusic.quote}</h5>
      </SubContainer>
    </MusicControllerContainer>
  );
};

export default MusicController;