import styled from 'styled-components';
import placeHolder from '../../../../public/static/images/placeholder-logo-1.png';

export const VinylCover = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  width: 150px;
  height: 150px;
  background: url(${placeHolder.src});
  background-size: cover;
  background-position: center;
  transform-style: preserve-3d;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  // box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
 &.cover-1 {
    left: calc(50% - 100px);
    transform: translateX(-50%) rotate3d(0, 1, 0, -50deg);;
    z-index: 6;
  }
  &.cover-2 {
    left: calc(50% - 50px);
    transform: translateX(-50%) rotate3d(0, 1, 0, -50deg);
    z-index: 5;
  }
  &.cover-3 {
    left: 50%;
    transform: translateX(-50%) rotate3d(0, 1, 0, -50deg);
    z-index: 4;
  }
  &.cover-4 {
    left: calc(50% + 50px);
    transform: translateX(-50%) rotate3d(0, 1, 0, -50deg);
    z-index: 3;
  }
  &.cover-5 {
    left: calc(50% + 100px);
    transform: translateX(-50%) rotate3d(0, 1, 0, -50deg);
    z-index: 2;
  }
`;