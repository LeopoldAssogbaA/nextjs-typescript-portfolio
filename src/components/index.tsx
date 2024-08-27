'use client';

import React, { useEffect, useState } from 'react';

import About from './About';
import LandingPage from './LandingPage';
import School from './School';
import Work from './Work';
import Contact from './Contact';

import Cursor from './Shared/Cursor';
import Menu from './Shared/Menu';
import PageTransition from './Shared/PageTransition';
import Languages from './Shared/Language';

import { MainContainer } from './styled';
import Loading from './Shared/Loading';
import RevealTransition from './Shared/RevealTransition';


const PortfolioContainer: React.FC = () => {
  const [init, setInit] = useState(false);
  const [documentLoaded, setDocumentLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);


  useEffect(() => {
    if (document.readyState === 'complete') {
      const timeoutId = setTimeout(() => setDocumentLoaded(true), 1500);
      return () => clearTimeout(timeoutId);
    } else {
      const handleLoad = () => {
        const timeoutId = setTimeout(() => setDocumentLoaded(true), 1500);
        window.removeEventListener('load', handleLoad);
        return () => clearTimeout(timeoutId);
      };
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!documentLoaded) {
    return <Loading />;
  }

  return (
    <MainContainer className='main-container' id='main-container'>
      <RevealTransition />
      <Cursor />
      <Menu init={init} currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <Languages />
      <LandingPage setInit={setInit} init={init} documentLoaded={documentLoaded} />
      <About setCurrentStep={setCurrentStep} />
      <PageTransition />
      <School setCurrentStep={setCurrentStep} />
      <Work setCurrentStep={setCurrentStep} />
      <Contact setCurrentStep={setCurrentStep} />
    </MainContainer>
  );
}

export default PortfolioContainer;
