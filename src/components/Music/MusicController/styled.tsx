import styled from 'styled-components';

export const MusicControllerContainer = styled.div`
  width: 90%;
  height: 100%;
`;

export const SubContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

   h5 {
    color: var(--color-deep-blue);
    font-size: 0.9rem;
    margin: 16px 0;
    text-align: center;
  }
`;

export const TitleContainer = styled.h3`
  display: flex;
  color: var(--color-deep-blue);
  margin: 0;
  font-size: 1.5rem;
`;

export const InfoContainer = styled.p`
  display: flex;
  color: var(--color-deep-blue);
  margin: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  z-index: 10;

  .button {
    font-size: 1.1rem;
    padding: 4px 10px 4px 8px;
    border: 2px solid rgba(0, 0, 163, 0.1);
    background: rgba(0, 0, 163, 0.1);
    border-radius: 60px;
    box-shadow: 0 4px 10px rgba(0, 0, 163, 0.15);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(5px);
    color: var(--color-deep-blue);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.2s ease, box-shadow 0.2s ease;


    &:hover {
      background: rgba(0, 0, 163, 0.2);
      box-shadow: 0 4px 10px rgba(0, 0, 163, 0.25);
    }
    
    span {
      display: flex;
      margin-left: 4px;
      font-size: 1rem;
    }
  }
`;

export const PlayButton = styled.button`
  display: flex;
  // width: 70px;
  justify-content: center;
`;

export const NextButton = styled.button`
  display: flex;
  // width: 70px;
  justify-content: center;
`;

export const PreviousButton = styled.button`
  display: flex;
  // width: 70px;
  justify-content: center;
`;