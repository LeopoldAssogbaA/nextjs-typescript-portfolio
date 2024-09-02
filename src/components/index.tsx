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
import MobilePortfolio from './Mobile';


const PortfolioContainer: React.FC = () => {
  const [init, setInit] = useState(false);
  const [documentLoaded, setDocumentLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [deviceOrientation, setDeviceOrientation] = useState<'portrait' | 'landscape'>('portrait');


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /mobile|android|iphone|ipod|blackberry|opera mini|iemobile/i.test(userAgent);
      const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(userAgent);
      const isDesktop = !isMobile && !isTablet;

      if (width < 768 || isMobile) {
        setDeviceType('mobile');
      } else if ((width < 1280 || isTablet) && !isMobile) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    handleResize(); // Appel initial
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (deviceType !== 'mobile') return;
    const checkOrientation = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      setDeviceOrientation(isPortrait ? 'portrait' : 'landscape');
      setDocumentLoaded(false);
    };

    // Vérification initiale de l'orientation
    checkOrientation();

    // Écoute des changements d'orientation
    const handleOrientationChange = () => {
      checkOrientation();
      console.log("L'orientation du dispositif a changé :", deviceOrientation);
    };

    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [deviceType, deviceOrientation]);


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
  }, [documentLoaded]);

  if (!documentLoaded) {
    return <Loading />;
  }

  if (deviceType === 'mobile' || (deviceType === 'tablet' && deviceOrientation === 'portrait')) {
    return (
      <>
        <Languages />
        <RevealTransition />
        <MobilePortfolio />
      </>
    );
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
