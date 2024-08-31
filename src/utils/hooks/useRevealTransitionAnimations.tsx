import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect } from 'react';

const useRevealTransitionAnimations = () => {
  const { contextSafe } = useGSAP();
  
  useEffect(() => {
    const animateReveal = contextSafe(() => {
      const tl = gsap.timeline();
      tl.to('.reveal-transition', {
        duration: 1,
        clipPath: 'inset(100% 0% 0% 0%)',
        stagger: 0.1,
        ease: 'back.inOut(2)',
        onComplete: () => {
          gsap.to('.reveal-transition-container', {
            duration: 0,
            visibility: "hidden",
          });
        }
      });
    });
  
    animateReveal();
  });
};

export default useRevealTransitionAnimations;
