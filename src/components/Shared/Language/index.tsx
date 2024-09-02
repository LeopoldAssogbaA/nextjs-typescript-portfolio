'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { LanguageButton, LanguageContainer, LanguageSubContainer } from './styled';
import useLanguageAnimations from '../../../utils/hooks/useLanguageAnimations';

import { locales } from '../../../i18n';

const Languages: React.FC = () => {
  const params = useParams();
  const currentLocale = params.locale as string;
  const [isInit, setIsInit] = useState(false);
  useLanguageAnimations(setIsInit);

  const changeLanguage = (locale: string) => {
    if (locale === currentLocale) return;
    window.location.href = `/${locale}`;
  };

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