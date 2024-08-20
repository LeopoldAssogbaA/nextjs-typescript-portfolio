'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  Name,
  NameContainer,
  LandingPageContainer,
  Work
} from './styled';
import { useTranslations } from 'next-intl';

const LandingPage: React.FC<{ setInit: (init: boolean) => void, init: boolean }> = ({ setInit, init }) => {
  const heartBeatTimeline = gsap.timeline();
  const [documentLoaded, setDocumentLoaded] = useState(false);
  const t = useTranslations('Home');

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !documentLoaded || init) {
      return;
    }

    const initPage = () => {
      const pageTransitionContainer = document.querySelector('div.page-transition-container-enter');
      const aboutPresentation = document.querySelector(".about-presentation");
      const mouseWheel = document.querySelector(".mouse-wheel");
      const schoolContainer = document.querySelector(".school-container");
      const workContainer = document.querySelector(".work-container");
      const contactContainer = document.querySelector(".contact-container");

      heartBeatTimeline.pause();

      if (pageTransitionContainer) {
        gsap.fromTo(pageTransitionContainer, 
          {
            zIndex: -1,
          },
          {
            zIndex: 2,
            onComplete: () => {
            console.log("Animation du conteneur de transition de page terminée");
          }
        });
      }

      if (aboutPresentation) {
        gsap.fromTo(aboutPresentation, 
          {
            display: "none",
          },
          {
            display: "block",
            onComplete: () => {
            console.log("Animation de la présentation 'about' terminée");
          }
        });
      }

      if (mouseWheel) {
        gsap.to(mouseWheel, {
          zIndex: 1000,
          top: "46%",
          duration: 0,
          onComplete: () => {
            console.log("Animation initiale de la roue de souris terminée");
          }
        });

        gsap.fromTo(
          mouseWheel,
          { opacity: 0, y: -25, zIndex: -2, },
          {
            zIndex: 1000, opacity: 1, y: 0, duration: .8, ease: "power1.in",
            onComplete: () => {
              console.log("Animation de fondu de la roue de souris terminée");
            }
          }
        );
      }

      if (schoolContainer) {
        gsap.fromTo(schoolContainer, 
          {
            display: "none",
          },
          {
            display: "initial",
            onComplete: () => {
            console.log("Animation du conteneur d'école terminée");
          }
        });
      }

      if (workContainer) {
        gsap.fromTo(workContainer, 
          {
            display: "none",
          },
          {
            display: "initial",
            onComplete: () => {
            console.log("Animation du conteneur de travail terminée");
          }
        });
      }

      if (contactContainer) {
        gsap.fromTo(contactContainer, 
          {
            display: "none",
          },
          {
            display: "flex",
            onComplete: () => {
            console.log("Animation du conteneur de contact terminée");
          }
        });
      }

      setInit(true);
    }

    initPage();
  }, [init, documentLoaded, heartBeatTimeline, setInit]);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setDocumentLoaded(true);
      console.log("Document chargé");
    } else {
      window.addEventListener('load', () => setDocumentLoaded(true));
      return () => window.removeEventListener('load', () => setDocumentLoaded(true));
    }
  }, []);

  useGSAP(() => {
    const name = document.querySelector('.name');
    const landingPage = document.querySelector('.main-container');

    gsap.to(name, {
      top: '40px',
      position: 'fixed',
      scale: '0.75',
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
      ".mouse-wheel",
      { opacity: 1, y: 0 },
      {
        opacity: 0, y: -50,
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

  return (
    <LandingPageContainer className="landing-page">
      <NameContainer className='name'>
        <Name className='name'>
          Léopold Assogba
        </Name>
        <Work className='work'>
          {t('work-title')}
        </Work>
      </NameContainer>
      <div className="mouse-wheel center">
        <div className="mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </LandingPageContainer>
  );
}

export default LandingPage;