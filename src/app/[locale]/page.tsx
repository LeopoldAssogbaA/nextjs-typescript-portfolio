import React from 'react';
import localFont from 'next/font/local'
import PortfolioContainer from '../../components';

const myFont = localFont({
  src:
    [
      {
        path: '../../../public/static/fonts/Moon2.0-Bold.otf',
        weight: '600',
        style: 'normal',
      },
      {
        path: '../../../public/static/fonts/Moon2.0-Light.otf',
        weight: '200',
        style: 'normal',
      },
      {
        path: '../../../public/static/fonts/Moon2.0-Regular.otf',
        weight: '400',
        style: 'normal',
      },
    ],
  preload: false,
})
const Home = () => {
  return (
    <main style={{ fontFamily: myFont.style.fontFamily }}>
      <PortfolioContainer />
    </main>
  );
}

export default Home;
