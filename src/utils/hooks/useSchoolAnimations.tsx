import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

const useSchoolAnimations = (setCurrentStep: (step: number) => void) => {
  useGSAP(() => {
    const schoolCardTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top+=45% bottom-=20%",
        end: "top+=65% center",
        scrub: true,
        onEnter: () => {
          setCurrentStep(2);
        },
        onLeaveBack: () => {
          setCurrentStep(1);
        }
      },
    });

    schoolCardTimeline.from(".card-1", {
      top: "60vh",
    });
    schoolCardTimeline.to(".card-1", {
      left: "calc(65vw - 126px)",
      rotate: -6,
    });

    schoolCardTimeline.from(".card-2", {
      top: "60vh",
    });
    schoolCardTimeline.to(".card-2", {
      left: "calc(65vw - 126px)",
      rotate: 0,
      onStart: () => {
        gsap.to(".school-card.card-1", {
          opacity: 0.4,
          duration: 0.2,
        })
      },
      onReverseComplete: () => {
        gsap.to(".school-card.card-1", {
          opacity: 1,
          duration: 0.2,
        })
      }
    });

    schoolCardTimeline.to(".school-card", {
      rotate: 360,
      scale: 0.8,
      stagger: 0.05,
    });
    schoolCardTimeline.to(".school-container", {
      left: "120vw",
      stagger: -0.05,
    });
  }, [setCurrentStep]);

  useGSAP(() => {
    const schoolTextOne = document.querySelector('.school-text-1');
    if (!schoolTextOne) return;
    const text = new SplitType(schoolTextOne as HTMLElement, { types: 'chars,words' });
    gsap.fromTo(text.chars,
      {
        opacity: 0,
        x: "-50px",
      },
      {
        opacity: 1,
        x: "0px",
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: ".main-container",
          start: "top+=45% bottom-=20%",
          end: "top+=45% center",
          scrub: true,
          toggleActions: 'play play reverse reverse',
        },
      });
    gsap.fromTo(".school-icons-1",
      {
        opacity: 0,
        scale: 0.1,
        rotate: 360,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.02,
        rotate: 0,
        scrollTrigger: {
          trigger: ".main-container",
          start: "top+=45% bottom-=20%",
          end: "top+=48% center",
          scrub: true,
          toggleActions: 'play play reverse reverse',
        },
      });
    gsap.to(".school-text-1",
      {
        opacity: 0,
        y: "-100vh",
        scrollTrigger: {
          trigger: ".main-container",
          start: "top+=53% bottom-=20%",
          end: "top+=53% center",
          scrub: true,
          toggleActions: 'play play reverse reverse',
        },
      });
  }, []);

  useGSAP(() => {
    const schoolTextTwo = document.querySelector('.school-text-2');
    if (!schoolTextTwo) return;
    const text = new SplitType(schoolTextTwo as HTMLElement, { types: 'words,chars' });
    gsap.fromTo(text.chars,
      {
        opacity: 0,
        x: "-50vh",
      },
      {
        opacity: 1,
        x: "0px",
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: ".main-container",
          start: "top+=55% bottom-=20%",
          end: "top+=55% center",
          scrub: true,
          toggleActions: 'play play reverse reverse',
        },
      });

    gsap.fromTo(".school-icons-2",
      {
        opacity: 0,
        scale: 0.1,
        rotate: 360,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.02,
        rotate: 0,
        scrollTrigger: {
          trigger: ".main-container",
          start: "top+=55% bottom-=20%",
          end: "top+=55% center",
          scrub: true,
          toggleActions: 'play play reverse reverse',
        },
      });
    gsap.to(".school-text-2",
      {
        opacity: 0,
        y: "-100vh",
        scrollTrigger: {
          trigger: ".main-container",
          start: "top+=63% bottom-=20%",
          end: "top+=63% center",
          scrub: true,
          toggleActions: 'play play reverse reverse',
        },
      });
  }, []);
};

export default useSchoolAnimations;
