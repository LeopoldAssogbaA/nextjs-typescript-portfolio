import React from 'react';
import { useTranslations } from 'next-intl';
import { LoadingContainer, LoadingSpinner, LoadingSubContainer } from './styled';
import Cursor from '../Cursor';

const Loading: React.FC = () => {
  const t = useTranslations('Common');

  return (
    <>
      <LoadingContainer className="loading-container">
        <LoadingSubContainer>
          <h2>{t('loading')}</h2>
          <LoadingSpinner className="loading-spinner" />
        </LoadingSubContainer>
      </LoadingContainer>
    </>
  );
};

export default Loading;
