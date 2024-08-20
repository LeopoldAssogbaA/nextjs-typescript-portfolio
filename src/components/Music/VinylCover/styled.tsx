import styled from 'styled-components';
import placeHolder from '../../../../public/static/images/placeholder-logo-1.png';

export const VinylCover = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  width: 200px;
  height: 200px;
  transform: rotate3d(0, 1, 0, -50deg);
  background: url(${placeHolder.src});
  background-size: cover;
  background-position: center;
  transform-style: preserve-3d;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

 &.cover-1 {
    left: 0;
    z-index: 6;
  }
  &.cover-2 {
    left: 75px;
    z-index: 5;
  }
  &.cover-3 {
    left: 150px;
    z-index: 4;
  }
  &.cover-4 {
    left: 225px;
    z-index: 3;
  }
  &.cover-5 {
    left: 300px;
    z-index: 2;
  }
`;