'use client';

import React, { useState } from 'react';
import gsap from 'gsap';
import { useParams } from 'next/navigation';
import { useGSAP } from '@gsap/react';

import { LanguageButton, LanguageContainer, LanguageSubContainer } from './styled';

import { locales } from '../../../i18n';

const Languages: React.FC = () => {
  const params = useParams();
  const currentLocale = params.locale as string;
  const [isInit, setIsInit] = useState(false);

  const changeLanguage = (locale: string) => {
    if (locale === currentLocale) return;
    window.location.href = `/${locale}`;
  };

  useGSAP(() => {
    gsap.fromTo(".language-button",
      {
        opacity: 0,
        y: -55,
      },
      {
        y: 0,
        delay: 1.8,
        opacity: 1,
        duration: .08,
        stagger: .055,
        onComplete: () => {
          setTimeout(() => {
            setIsInit(true);
          }, 400);
        }
      });
  });

  const getCurrentLocale = (locale: string) => {
    if (!isInit) return '';
    return locale === currentLocale ? 'current-locale' : '';
  };

  return (
    <LanguageContainer>
      <LanguageSubContainer>
        {locales.map((locale) => (
          <LanguageButton
            className={`hover-effect language-button ${getCurrentLocale(locale)}`}
            onClick={() => changeLanguage(locale)}
            key={locale}
          >
            {locale?.charAt(0).toUpperCase() + locale?.slice(1).toLowerCase()}
          </LanguageButton>
        ))}
      </LanguageSubContainer>
    </LanguageContainer>
  );
};

export default Languages;