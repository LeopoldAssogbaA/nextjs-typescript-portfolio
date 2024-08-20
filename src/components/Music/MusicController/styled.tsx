import styled from 'styled-components';

export const MusicControllerContainer = styled.div`
  width: 400px;
  height: 150px;
`;

export const SubContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleContainer = styled.h3`
  display: flex;
  color: white;
  margin: 0;
  font-size: 1.5rem;
`;

export const InfoContainer = styled.p`
  display: flex;
  color: white;
  margin: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  z-index: 10;
`;

export const PlayButton = styled.button`
  display: flex;
  width: 70px;
  justify-content: center;
`;

export const NextButton = styled.button`
  display: flex;
  width: 70px;
  justify-content: center;
`;

export const PreviousButton = styled.button`
  display: flex;
  width: 70px;
  justify-content: center;
`;