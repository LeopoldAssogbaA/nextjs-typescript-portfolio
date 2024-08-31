import React from 'react';
import { RevealTransitionContainer } from './style';
import useRevealTransitionAnimations from '../../../utils/hooks/useRevealTransitionAnimations';

const RevealTransition: React.FC = () => {
  useRevealTransitionAnimations();

  return (
    <RevealTransitionContainer className='reveal-transition-container'>
      <div className='reveal-transition reveal-1' />
      <div className='reveal-transition reveal-2' />
      <div className='reveal-transition reveal-3' />
      <div className='reveal-transition reveal-4' />
      <div className='reveal-transition reveal-5' />
    </RevealTransitionContainer>
  );
};

export default RevealTransition;
