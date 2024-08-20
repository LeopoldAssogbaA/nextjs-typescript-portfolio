import React, { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { RevealTransitionContainer } from './style';

const RevealTransition: React.FC = () => {
  const { contextSafe } = useGSAP();

  const animateReveal = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to('.reveal-transition', {
      duration: 1,
      clipPath: 'inset(100% 0% 0% 0%)',
      stagger: 0.1,
      ease: 'back.inOut(2)',
      
    });
  });

  useEffect(() => {
    animateReveal();
  }, [animateReveal]);

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
