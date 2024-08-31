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
      gsap.fromTo('.name',
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

      gsap.fromTo('div.page-transition-container-enter',
        { zIndex: -1 },
        { 
          zIndex: 2,
          onComplete: () => console.log("Animation 'pageTransitionContainer' terminée")
        }
      );

      gsap.fromTo(".about-presentation",
        { display: "none" },
        { display: "block" }
      );

      gsap.fromTo(
        ".mouse-wheel",
        { display: "none", opacity: 0, zIndex: -2, top: "40%" },
        { zIndex: 10, top: "46%", display: "block", opacity: 1, duration: .8, ease: "back.inOut(1)", delay: 1.2 }
      );

      gsap.fromTo(".school-container",
        { display: "none" },
        { display: "initial" }
      );

      gsap.fromTo(".work-container",
        { display: "none" },
        { display: "initial" }
      );

      gsap.fromTo(".contact-container",
        { display: "none" },
        { display: "flex" }
      );

      gsap.fromTo('.-one',
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

      gsap.fromTo('.-two',
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
      setInit(true);
    };

    initPage();
  }, [init, documentLoaded, setInit]);
};

export default useInitPage;
