import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState } from 'react';
import { MainNav, Step } from './styled';
import { useTranslations } from 'next-intl';
import { STEPS } from '../../../utils/constants';

const Menu: React.FC<{ init: boolean }> = ({ init }) => {
  const t = useTranslations('Menu');
  const [currentStep, setCurrentStep] = useState(0);
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

  return (
    <div>
      <MainNav className="menu">
        <ul>
          {STEPS.map((step, index) => (
            <Step
              className={`menu-step step-${index + 1} hover-effect ${getCurrentSteps(step.name)}`}
              key={step.name}
              onClick={() => setCurrentStep(index)}
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