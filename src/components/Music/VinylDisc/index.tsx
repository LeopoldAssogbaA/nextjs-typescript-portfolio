import React from 'react';
import { VinylDisc } from './styled';

const VinylDiscComponent: React.FC = () => {
  return (
    <>
      <VinylDisc className="vinyl-disc disc-1" />
      <VinylDisc className="vinyl-disc disc-2" />
      <VinylDisc className="vinyl-disc disc-3" />
      <VinylDisc className="vinyl-disc disc-4" />
      <VinylDisc className="vinyl-disc disc-5" />
    </>
  );
};

export default VinylDiscComponent;
