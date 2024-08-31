'use client'

import React from 'react';
import { AboutContainer } from './styled';
import { useTranslations } from 'next-intl';
import useAboutAnimations from '../../utils/hooks/useAboutAnimations';

const About: React.FC<{ setCurrentStep: (step: number) => void }> = ({ setCurrentStep }) => {
  const t = useTranslations('About');
  useAboutAnimations(setCurrentStep);

  return (
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
  );
};

export default About;
