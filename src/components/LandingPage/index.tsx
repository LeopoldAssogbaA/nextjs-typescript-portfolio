'use client';

import React, { useLayoutEffect } from 'react';
import {
  Name,
  NameContainer,
  LandingPageContainer,
  Work
} from './styled';
import { useTranslations } from 'next-intl';
import useLandingScrollAnimations from '../../utils/hooks/useLandingScrollAnimations';
import useWaveScroll from '../../utils/hooks/useWaveScroll';
import gsap from 'gsap';
import ICONS from '../../utils/constants/icons';

const LandingPage: React.FC<{
  setInit: (init: boolean) => void,
  init: boolean,
  documentLoaded: boolean
}> = ({
  setInit,
  init,
  documentLoaded
}) => {
  const t = useTranslations('Home');
  useLandingScrollAnimations();
  useWaveScroll();
  
  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !documentLoaded || init) {
      return;
    }

    const initPage = () => {
      const waveOne = document.querySelector('.-one');
      const waveTwo = document.querySelector('.-two');
      const pageTransitionContainer = document.querySelector('div.page-transition-container-enter');
      const aboutPresentation = document.querySelector(".about-presentation");
      const scrollArrow = document.querySelector(".arrow-down-scroll.center");
      const schoolContainer = document.querySelector(".school-container");
      const workContainer = document.querySelector(".work-container");
      const contactContainer = document.querySelector(".contact-container");
      const name = document.querySelector('.name');


      if (name) {
        gsap.fromTo(name, 
          {
            opacity: 0,
            y: -55,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 1,
            ease: "back.inOut(2)",
            onComplete: () => {
              console.log("Animation du nom terminée");
            }
          });
      }

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

      if (scrollArrow) {

        gsap.fromTo(
          scrollArrow,
          { display: "none", opacity: 0, zIndex: -2, top: "40%", },
          {
            zIndex: 10, top: "46%", display: "block", opacity: 1, duration: .8, ease: "back.inOut(1)", delay: 1.2,
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

      if (waveOne && waveTwo) {
        gsap.fromTo(waveOne, {
          opacity: 0,
          left: '-110%',
          top: '-120%',
        }, {
          opacity: 0.4,
          left: '-50%',
          top: '-60%',
          duration: 2.5,
          ease: "back.inOut",
          onComplete: () => {
            console.log("Animation de la vague terminée");
          }
        });
      
        gsap.fromTo(waveTwo, {
          opacity: 0,
          left: '-110%',
          top: '-120%',
        }, {
          opacity: 0.5,
          left: '-50%',
          top: '-60%',
          duration: 2.6,
          ease: "back.inOut",
          onComplete: () => {
            console.log("Animation de la vague terminée");
          }
        });
      }

      setInit(true);
    }

    initPage();
  }, [init, documentLoaded, setInit]);
  
  return (
    <LandingPageContainer className="landing-page">
      <div className='box'>
        <div className='wave -one'/>
        <div className='wave -two'/>
      </div>
      <NameContainer className='name'>
        <Name className='name'>
          Léopold Assogba
        </Name>
        <Work className='work'>
          {t('work-title')}
        </Work>
      </NameContainer>
      <div className="arrow-down-scroll center">
        {ICONS.arrowDown}
      </div>
    </LandingPageContainer>
  );
}

export default LandingPage;