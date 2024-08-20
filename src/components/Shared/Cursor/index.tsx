import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { CursorDiv } from './styled';


const Cursor: React.FC = () => {

  useGSAP(() => {
    document.body.addEventListener("mousemove", evt => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY
      })
    });
  }, []);

  return <CursorDiv className="cursor" />;
};

export default Cursor;
