import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitType from 'split-type';

const useAboutAnimations = (setCurrentStep: (step: number) => void) => {
  useGSAP(() => {
    const about = document.querySelector('.about');
    if (!about) return;
    const text = new SplitType(about as HTMLElement, { types: 'words,chars' });
    gsap.fromTo(text.chars,
      {
        opacity: 0,
        y: "-50px",
      },
      {
        opacity: 1,
        y: "0px",
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: ".main-container",
          start: 'top+=15% center',
          end: 'top+=30% bottom-=37.5%',
          scrub: true,
          toggleActions: 'play play reverse reverse',
          onEnter: () => {
            setCurrentStep(1);
          },
          onLeaveBack: () => {
            setCurrentStep(0);
          }
        }
      });
  }, [setCurrentStep]);
};

export default useAboutAnimations;
