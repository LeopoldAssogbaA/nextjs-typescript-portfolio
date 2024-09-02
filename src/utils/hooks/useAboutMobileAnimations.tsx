import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const useAboutMobileAnimations = () => {
  useGSAP(() => {
    gsap.from('.reveal-text', {
      y: -10,
      opacity: 0,
      duration: 0.8,
      stagger: .02,
      delay: 0.8,
      ease: 'power2.inOut'
    });
    gsap.from(".wave", {
      y: -100,
      x: -100,
      opacity: 0,
      stagger: .02,
      duration: 1,
      delay: 0.6,
      ease: 'power2.inOut'
    });
    gsap.to(['body', 'html'], {
      height: '100%',
      duration: 0,
    });
    gsap.to('main', {
      height: '100%',
      width: '100%',
      duration: 0,
    });
  }, []);
};

export default useAboutMobileAnimations;
