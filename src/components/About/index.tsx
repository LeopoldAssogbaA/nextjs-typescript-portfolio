'use client'

import React from 'react';
import { AboutContainer } from './styled';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

const About: React.FC<{ setCurrentStep: (step: number) => void }> = ({ setCurrentStep }) => {
  const t = useTranslations('About');

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
  }, []);

  return (
    <>
      <AboutContainer className="about-presentation about" id="about">
        <p className="about-text p-1">
          {t('paragraph-one')}
        </p>
        <p className="about-text p-2">
          {t('paragraph-two')}
        </p>
        <p className="about-text p-3">
          {t('paragraph-three')}
        </p>
        <p className="about-text p-4">
          {t('paragraph-four')}
        </p>
      </AboutContainer>
    </>
  );
};

export default About;
