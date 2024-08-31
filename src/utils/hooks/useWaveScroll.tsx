import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const useWaveScroll = () => {
  const waveTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-page",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });

  useGSAP(() => {
    waveTimeline.fromTo('.wave', {
      left: '-50%',
      top: '-60%',
    }, {
      left: '90%',
      top: '40%',
    });
  }, []);
};

export default useWaveScroll;
