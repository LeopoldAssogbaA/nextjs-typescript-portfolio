import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const useLanguageAnimations = (setIsInit: (isInit: boolean) => void) => {
  useGSAP(() => {
    gsap.fromTo(".language-button",
      {
        opacity: 0,
        y: -55,
      },
      {
        y: 0,
        delay: 1.8,
        opacity: 1,
        duration: .08,
        stagger: .055,
        onComplete: () => {
          setTimeout(() => {
            setIsInit(true);
          }, 400);
        }
      });
  }, [setIsInit]);
};

export default useLanguageAnimations;
