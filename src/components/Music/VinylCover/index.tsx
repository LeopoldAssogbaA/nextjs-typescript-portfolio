'use client'

import React from 'react';
import { VinylCover } from './styled';

const VinylCoverComponent: React.FC = () => {
  return (
    <>
      <VinylCover className="vinyl-cover cover-1" />
      <VinylCover className="vinyl-cover cover-2" />
      <VinylCover className="vinyl-cover cover-3" />
      <VinylCover className="vinyl-cover cover-4" />
      <VinylCover className="vinyl-cover cover-5" />
    </>
  );
};

export default VinylCoverComponent;
