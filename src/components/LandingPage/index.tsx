'use client';

import React from 'react';
import {
  Name,
  NameContainer,
  LandingPageContainer,
  Work
} from './styled';
import { useTranslations } from 'next-intl';
import useLandingScrollAnimations from '../../utils/hooks/useLandingScrollAnimations';
import useInitPage from '../../utils/hooks/useInitPage';
import useWaveScroll from '../../utils/hooks/useWaveScroll';

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
  useInitPage(documentLoaded, init, setInit);
  useWaveScroll();
  
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
      <div className="mouse-wheel center">
        <div className="mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </LandingPageContainer>
  );
}

export default LandingPage;