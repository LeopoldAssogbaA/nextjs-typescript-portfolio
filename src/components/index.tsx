'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';

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


const PortfolioContainer: React.FC = () => {
  const [init, setInit] = useState(false);
  const [documentLoaded, setDocumentLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      const timeoutId = setTimeout(() => setDocumentLoaded(true), 2000);
      return () => clearTimeout(timeoutId);
    } else {
      const handleLoad = () => {
        const timeoutId = setTimeout(() => setDocumentLoaded(true), 2000);
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
      <Cursor />
      <Menu init={init} />
      <Languages />
      <LandingPage setInit={setInit} init={init} documentLoaded={documentLoaded} />
      <About />
      <PageTransition />
      <School />
      <Work />
      <Contact />
    </MainContainer>
  );
}

export default PortfolioContainer;
