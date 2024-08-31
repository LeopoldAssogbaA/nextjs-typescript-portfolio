import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const useMenuAnimations = (init: boolean, setIsInit: (isInit: boolean) => void) => {
  useGSAP(() => {
    if (!init) return;
    gsap.fromTo(".menu-step",
      {
        y: -55,
      },
      {
        y: 0,
        opacity: 1,
        duration: .08,
        stagger: .055,
        delay: 1.2,
        onComplete: () => {
          setIsInit(true);
        }
      });
  }, [init]);
};

export default useMenuAnimations;
