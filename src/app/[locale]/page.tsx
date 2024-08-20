import React from 'react';
import localFont from 'next/font/local'

const myFont = localFont({ src: 
  [
    {
      path: '../../../public/static/fonts/Moon2.0-Bold.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/Moon2.0-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/Moon2.0-Regular.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  preload: false,
})
const Home = () => {
  return (
    <main style={{ fontFamily: myFont.style.fontFamily }}>
      Hello
    </main>
  );
}

export default Home;
