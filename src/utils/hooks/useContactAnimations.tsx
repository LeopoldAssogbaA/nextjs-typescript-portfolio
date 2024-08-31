import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const useContactAnimations = (setCurrentStep: (step: number) => void) => {
  useGSAP(() => {
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-container',
        start: "top+=85% bottom",
        end: "bottom bottom",
        scrub: true,
        toggleActions: 'play none reverse reset',
        onEnter: () => {
          setCurrentStep(4);
        },
        onLeaveBack: () => {
          setCurrentStep(3);
        }
      },
    });

    const discRevealTimeline = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.main-container',
          start: "top+=87.5% bottom",
          end: "top+=95% bottom",
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      }
    );
    discRevealTimeline.from(['.vinyl-cover', '.vinyl-disc'], {
      left: -170,
      transform: 'rotate3d(0, 0, 0, 0deg) translateX(-50%)',
      stagger: 0.02,
    });
    discRevealTimeline.to('.vinyl-disc', {
      opacity: 1,
    });
    discRevealTimeline.to('.vinyl-disc', {
      left: "+=30px",
      stagger: 0.02,
    });
    discRevealTimeline.to('.vinyl-disc', {
      left: "-=20px",
      stagger: 0.02,
    });
    discRevealTimeline.from('.button', {
      opacity: 0,
      stagger: 0.02,
    });

    discRevealTimeline.from(['.music-title', '.music-info', '.music-quote'], {
      opacity: 0,
      x: -150,
      stagger: 0.02,
      duration: 0.5,
    })

    contactTimeline.from('.contact-element-1', {
      clipPath: 'inset(0 0 100% 0)',
      onComplete: () => {
        gsap.to('.work-container', {
          display: 'none',
        });
      }
    })
    contactTimeline.from('.contact-element-4', {
      clipPath: 'inset(0 100% 0 0)',
      onReverseComplete: () => {
        gsap.to('.work-container', {
          display: 'initial',
        });
      }
    });
    contactTimeline.from('.contact-element-5', {
      clipPath: 'inset(100% 0 0 0)',
    });
    contactTimeline.from('.contact-element-3', {
      clipPath: 'inset(100% 0 0 0)',
    });
  }, [setCurrentStep]);
};

export default useContactAnimations;

