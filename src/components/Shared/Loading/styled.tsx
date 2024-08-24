import styled from 'styled-components';

export const LoadingContainer = styled.div`
  background: var(--color-deep-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: var(--color-cream);
`;

export const LoadingSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-right: 2rem;
  }
`;

export const LoadingSpinner = styled.div`
  margin-top: 1rem;
`;