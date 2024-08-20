'use client';

import React, { useLayoutEffect, useState } from 'react';

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


const PortfolioContainer: React.FC = () => {
  const [init, setInit] = useState(false);

  return (
    <MainContainer className='main-container' id='main-container'>
      <Cursor />
      <Menu init={init} />
      <Languages />
      <LandingPage setInit={setInit} init={init} />
      <About />
      <PageTransition />
      <School />
      <Work />
      <Contact />
    </MainContainer>
  );
}

export default PortfolioContainer;
