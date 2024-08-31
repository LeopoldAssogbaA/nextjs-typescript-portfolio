import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const useWorkAnimations = (setCurrentStep: (step: number) => void) => {
  useGSAP(() => {
    const workTimelineOne = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top+=64% bottom-=20%",
        end: "top+=69% center",
        scrub: true,
        toggleActions: 'play play reverse reverse',
        onEnter: () => {
          setCurrentStep(3);
        },
        onLeaveBack: () => {
          setCurrentStep(2);
        }
      },
    });
    const workTimelineTwo = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top+=70% bottom-=20%",
        end: "top+=80% center",
        scrub: true,
        toggleActions: 'play play reverse reverse',
      },
    });

    const fadeOutTimelineOne = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top+=65% center",
        end: "top+=70% center",
        scrub: true,
        toggleActions: 'play play reverse reverse',
      },
    });

    const fadeOutTimelineTwo = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top+=70% center",
        end: "top+=75% center",
        scrub: true,
        toggleActions: 'play play reverse reverse',
      },
    });

    workTimelineOne.fromTo('.work-element-1', {
      left: '-150%',
    }, {
      left: '50%',
      ease: 'power.inOut(2)',
      onComplete: () => {
        gsap.to('.school-container', {
          display: 'none',
        });
      }
    })
      .to('.work-element-1', {
        clipPath: 'inset(0% 0% 0% 86.7%)',
        borderRadius: '0',
        left: '55%',
        ease: 'power.inOut(1)',
        onReverseComplete: () => {
          gsap.to('.school-container', {
            display: 'initial',
          });
        }
      });

    fadeOutTimelineOne.fromTo('.description-container-1, .project-container-1', {
      opacity: 1,
    }, {
      opacity: 0,
      ease: 'power.inOut(2)',
    });

    workTimelineTwo.fromTo('.work-element-2', {
      left: '-150%',
    }, {
      left: '45%',
      ease: 'power.inOut(4)',
    })
      .to('.work-element-2', {
        clipPath: 'inset(0% 0% 0% 86.7%)',
        borderRadius: '0',
        ease: 'power.inOut(4)',
      })
      .to('.work-element', {
        clipPath: 'inset(100% 0% 0% 86.7%)',
        ease: 'power.out(2)',
      });

    fadeOutTimelineTwo.fromTo('.description-container-2, .project-container-2', {
      opacity: 1,
    }, {
      opacity: 0,
      ease: 'power.inOut(2)',
    });
  }, [setCurrentStep]);
};

export default useWorkAnimations;
