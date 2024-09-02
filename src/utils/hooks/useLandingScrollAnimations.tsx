import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const useLandingScrollAnimations = () => {
  useGSAP(() => {
    const name = document.querySelector('.name');
    const landingPage = document.querySelector('.main-container');

    gsap.to(name, {
      top: '35px',
      position: 'fixed',
      scale: '0.6',
      scrollTrigger: {
        trigger: landingPage,
        start: 'top+=10% center',
        end: 'top+=20% bottom-=25%',
        scrub: true,
      },
      onComplete: () => {
        gsap.to(".work", {
          opacity: 1,
        });
      },
    });

    gsap.fromTo(
      ".arrow-down-scroll.center",
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: landingPage,
          start: 'top+=10% center',
          end: 'top+=20% bottom-=25%',
          scrub: true,
        }
      }
    );

    gsap.fromTo(".work",
      {
        opacity: 0,
        filter: "blur(30px)",
        y: "-50px",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: "0px",
        scrollTrigger: {
          trigger: landingPage,
          start: 'top+=10% center',
          end: 'top+=20% bottom-=25%',
          scrub: true,
        },
      });
  }, []);
};

export default useLandingScrollAnimations;
