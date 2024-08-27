import styled from 'styled-components';
import gh from '../../../../public/static/images/gh.jpg';
import miki from '../../../../public/static/images/miki.jpeg';
import hmc from '../../../../public/static/images/hmc.jpeg';
import tpab from '../../../../public/static/images/tpab.jpeg';
import rocky from '../../../../public/static/images/rocky.jpg';

export const VinylCover = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 20px;
  width: 150px;
  height: 150px;
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
    background-image: url(${gh.src});
}
  &.cover-2 {
    left: calc(50% - 50px);
    transform: translateX(-50%) rotate3d(0, 1, 0, -50deg);
    z-index: 5;
    background-image: url(${miki.src});
  }
  &.cover-3 {
    left: 50%;
    transform: translateX(-50%) rotate3d(0, 1, 0, -50deg);
    z-index: 4;
    background-image: url(${hmc.src});
  }
  &.cover-4 {
    left: calc(50% + 50px);
    transform: translateX(-50%) rotate3d(0, 1, 0, -50deg);
    z-index: 3;
    background-image: url(${rocky.src});
}
  &.cover-5 {
    left: calc(50% + 100px);
    transform: translateX(-50%) rotate3d(0, 1, 0, -50deg);
    z-index: 2;
    background-image: url(${tpab.src});
  }
`;