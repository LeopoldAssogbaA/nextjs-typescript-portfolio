import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState } from 'react';
import { MainNav, Step } from './styled';
import { useTranslations } from 'next-intl';
import { STEPS } from '../../../utils/constants';

const Menu: React.FC<{ init: boolean, currentStep: number, setCurrentStep: (step: number) => void }> = ({ init, currentStep, setCurrentStep }) => {
  const t = useTranslations('Menu');
  const [isInit, setIsInit] = useState(false);

  useGSAP(() => {
    if (!init) return;
    gsap.fromTo(".menu-step",
      {
        y: -55,
      },
      {
        y: 0,
        opacity: 1,
        duration: .08,
        stagger: .055,
        delay: 1.2,
        onComplete: () => {
          setIsInit(true);
        }
      });
  }, [init]);


  const getCurrentSteps = (name: string) => {
    if (!isInit) return '';
    return STEPS[currentStep].name === name ? 'current-step' : '';
  };

  const handleStep = (step: any) => {
    let duration = 1.5;
    const ecart = Math.abs(step.position - (currentStep + 1));
    if (ecart === 0) return;

    duration = ecart > 1 ? duration + (ecart * 0.5) : duration;
    setCurrentStep(STEPS.indexOf(step));
    const windowHeight = window.document.documentElement.clientHeight
    const stepPosition = STEPS.find(s => s.name === step.name)?.position;
    if (!stepPosition) return;
    let scrollPosition = (windowHeight * stepPosition) - windowHeight;
    if (stepPosition === 3) scrollPosition -= (windowHeight * 0.15);
    if (stepPosition === 4) scrollPosition -= (windowHeight * 0.35);
    gsap.to(window, { duration, scrollTo: scrollPosition, ease: 'power1.out' });
  }

  return (
    <div>
      <MainNav className="menu">
        <ul>
          {STEPS.map((step, index) => (
            <Step
              className={`menu-step step-${index + 1} hover-effect ${getCurrentSteps(step.name)}`}
              key={step.name}
              onClick={() => handleStep(step)}
            >
              {t(step.name)}
            </Step>
          ))}
        </ul>
      </MainNav>
    </div>
  );
};

export default Menu;