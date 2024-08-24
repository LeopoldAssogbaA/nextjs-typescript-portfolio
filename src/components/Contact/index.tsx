'use client'

import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import placeholderLogo from '../../../public/static/images/placeholder-logo-1.png';
import MusicPlayer from '../Music/MusicPlayer';
import SplitType from 'split-type';
import { ContactContainer, ContactElement, ContactGrid } from './styled';

const contactElements = [
  {
    src: placeholderLogo.src,
    alt: 'Contact 1',
  },
  {
    src: placeholderLogo,
    alt: 'Contact 2',
  },
  {
    src: placeholderLogo,
    alt: 'Contact 3',
  },
  {
    src: placeholderLogo,
    alt: 'Contact 4',
  },
  {
    src: placeholderLogo,
    alt: 'Contact 5',
  },
];

const Contact: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useGSAP(() => {
    const musicTitle = document.querySelector('.music-title');
    const musicInfo = document.querySelector('.music-info');
    const textTitle = new SplitType(musicTitle as HTMLElement, { types: 'chars' });
    const textInfo = new SplitType(musicInfo as HTMLElement, { types: 'chars' });

    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-container',
        start: "top+=85% bottom",
        end: "bottom bottom",
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    const discRevealTimeline = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.main-container',
          start: "top+=87.5% bottom",
          end: "top+=95% bottom", // Modifié pour s'arrêter à mi-chemin
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      }
    );
    discRevealTimeline.from(['.vinyl-cover', '.vinyl-disc'], {
      left: -250,
      transform: 'rotate3d(0, 0, 0, 0deg)',
      stagger: 0.02,
    });
    discRevealTimeline.to('.vinyl-disc', {
      opacity: 1,
    });
    discRevealTimeline.to('.vinyl-disc', {
      left: "+=30px",
      stagger: 0.02,
    });
    discRevealTimeline.to('.vinyl-disc', {
      left: "-=20px",
      stagger: 0.02,
    });
    discRevealTimeline.from('.button', {
      clipPath: 'inset(0% 100% 0 0)',
      stagger: 0.02,
    });
    discRevealTimeline.from(textTitle.chars, {
      opacity: 0,
      stagger: 0.02,
    });
    discRevealTimeline.from(textInfo.chars, {
      opacity: 0,
      stagger: 0.02,
    });

    contactTimeline.from('.contact-element-1', {
      clipPath: 'inset(0 0 100% 0)',
      onComplete: () => {
        gsap.to(['.school-container', '.work-container'], {
          display: 'none',
        });
      }
    })
    contactTimeline.from('.contact-element-4', {
      clipPath: 'inset(0 100% 0 0)',
      onReverseComplete: () => {
        gsap.to(['.school-container', '.work-container'], {
          display: 'initial',
        });
      }
    });
    contactTimeline.from('.contact-element-5', {
      clipPath: 'inset(100% 0 0 0)',
    });
    contactTimeline.from('.contact-element-3', {
      clipPath: 'inset(100% 0 0 0)',
    });
    // contactTimeline.from('.contact-element-2', {
    //   clipPath: 'inset(0 0 0 100%)',
    // });
  }, []);

  return (
    <ContactContainer className="contact-container">
      <ContactGrid className="contact-grid">
        <ContactElement className={`contact-element contact-element-1`} />
        <ContactElement className={`contact-element contact-element-2`} >
          <MusicPlayer />
        </ContactElement>
        <ContactElement className={`contact-element contact-element-3`} />
        <ContactElement className={`contact-element contact-element-4`} />
        <ContactElement className={`contact-element contact-element-5`} />

      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;