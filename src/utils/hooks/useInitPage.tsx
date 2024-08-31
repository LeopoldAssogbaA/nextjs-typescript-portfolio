// import { useLayoutEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const useInitPage = (documentLoaded: boolean, init: boolean, setInit: (init: boolean) => void) => {

  useGSAP(() => {
    console.log('useLayoutEffect dans useInitPage', { documentLoaded, init });
    if (typeof window === 'undefined' || !documentLoaded || init) {
      console.log('Conditions non remplies, sortie précoce');
      return;
    }

    const initPage = () => {
      console.log('Fonction initPage appelée');
      const waveOne = document.querySelector('.-one');
      const waveTwo = document.querySelector('.-two');
      const pageTransitionContainer = document.querySelector('div.page-transition-container-enter');
      const aboutPresentation = document.querySelector(".about-presentation");
      const mouseWheel = document.querySelector(".mouse-wheel");
      const schoolContainer = document.querySelector(".school-container");
      const workContainer = document.querySelector(".work-container");
      const contactContainer = document.querySelector(".contact-container");
      const name = document.querySelector('.name');

      if (name) {
        gsap.fromTo(name,
          { opacity: 0, y: -55 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            delay: 1, 
            ease: "back.inOut(2)",
            onComplete: () => console.log("Animation 'name' terminée")
          }
        );
      }

      if (pageTransitionContainer) {
        gsap.fromTo(pageTransitionContainer,
          { zIndex: -1 },
          { 
            zIndex: 2,
            onComplete: () => console.log("Animation 'pageTransitionContainer' terminée")
          }
        );
      }

      if (aboutPresentation) {
        gsap.fromTo(aboutPresentation,
          { display: "none" },
          { display: "block" }
        );
      }

      if (mouseWheel) {
        gsap.fromTo(
          mouseWheel,
          { display: "none", opacity: 0, zIndex: -2, top: "40%" },
          { zIndex: 10, top: "46%", display: "block", opacity: 1, duration: .8, ease: "back.inOut(1)", delay: 1.2 }
        );
      }

      if (schoolContainer) {
        gsap.fromTo(schoolContainer,
          { display: "none" },
          { display: "initial" }
        );
      }

      if (workContainer) {
        gsap.fromTo(workContainer,
          { display: "none" },
          { display: "initial" }
        );
      }

      if (contactContainer) {
        gsap.fromTo(contactContainer,
          { display: "none" },
          { display: "flex" }
        );
      }

      if (waveOne && waveTwo) {
        gsap.fromTo(waveOne,
          { opacity: 0, left: '-110%', top: '-120%' },
          { 
            opacity: 0.4, 
            left: '-50%', 
            top: '-60%', 
            duration: 2.5, 
            ease: "back.inOut",
            onComplete: () => console.log("Animation 'waveOne' terminée")
          }
        );

        gsap.fromTo(waveTwo,
          { opacity: 0, left: '-110%', top: '-120%' },
          { 
            opacity: 0.5, 
            left: '-50%', 
            top: '-60%', 
            duration: 2.6, 
            ease: "back.inOut",
            onComplete: () => console.log("Animation 'waveTwo' terminée")
          }
        );
      }
      setInit(true);
    };

    initPage();
  }, [init, documentLoaded, setInit]);
};

export default useInitPage;
