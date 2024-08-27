import styled from 'styled-components';
import gh from '../../../../public/static/images/gh.jpg';
import miki from '../../../../public/static/images/miki.jpeg';
import hmc from '../../../../public/static/images/hmc.jpeg';
import tpab from '../../../../public/static/images/tpab.jpeg';
import rocky from '../../../../public/static/images/rocky.jpg';

export const VinylDisc = styled.div`
  opacity: 0;
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  // box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  background: radial-gradient(
      circle closest-side,
      black 35%,
      rgba(0, 0, 0, 0) 35.5%,
      rgba(0, 0, 0, 0) 96%,
      black 96.5%
    ),
    radial-gradient(
      circle closest-side,
      rgba(0, 0, 0, 0) 40.60634%,
      rgba(0, 0, 0, 0.3) 40.80634%,
      rgba(0, 0, 0, 0.3) 41.80634%,
      rgba(0, 0, 0, 0) 42.00634%,
      rgba(0, 0, 0, 0) 50.86705%,
      rgba(0, 0, 0, 0.3) 51.06705%,
      rgba(0, 0, 0, 0.3) 52.06705%,
      rgba(0, 0, 0, 0) 52.26705%,
      rgba(0, 0, 0, 0) 59.64622%,
      rgba(0, 0, 0, 0.3) 59.84622%,
      rgba(0, 0, 0, 0.3) 60.84622%,
      rgba(0, 0, 0, 0) 61.04622%,
      rgba(0, 0, 0, 0) 68.71551%,
      rgba(0, 0, 0, 0.3) 68.91551%,
      rgba(0, 0, 0, 0.3) 69.91551%,
      rgba(0, 0, 0, 0) 70.11551%,
      rgba(0, 0, 0, 0) 77.58585%,
      rgba(0, 0, 0, 0.3) 77.78585%,
      rgba(0, 0, 0, 0.3) 78.78585%,
      rgba(0, 0, 0, 0) 78.98585%,
      rgba(0, 0, 0, 0) 85.59983%,
      rgba(0, 0, 0, 0.3) 85.79983%,
      rgba(0, 0, 0, 0.3) 86.79983%,
      rgba(0, 0, 0, 0) 86.99983%,
      rgba(0, 0, 0, 0) 95.23043%,
      rgba(0, 0, 0, 0.3) 95.43043%,
      rgba(0, 0, 0, 0.3) 96.43043%,
      rgba(0, 0, 0, 0) 96.63043%
    ),
    conic-gradient(
      black 40deg,
      #eef 42deg,
      black 44deg,
      black 219deg,
      #eef 222deg,
      #eef 223deg,
      black 228deg
    ),
    repeating-radial-gradient(
      rgba(0, 0, 0, 0.41475) 1.18644px,
      rgba(0, 0, 0, 0.0819985) 2.37288px,
      rgba(0, 0, 0, 0.352777) 3.55932px,
      rgba(0, 0, 0, 0.0649355) 4.74576px,
      rgba(0, 0, 0, 0.444033) 5.9322px,
      rgba(0, 0, 0, 0.0227836) 7.11864px,
      rgba(0, 0, 0, 0.423492) 8.30508px,
      rgba(0, 0, 0, 0.0421818) 9.49153px,
      rgba(0, 0, 0, 0.351438) 10.67797px,
      rgba(0, 0, 0, 0.0314798) 11.86441px,
      rgba(0, 0, 0, 0.483378) 13.05085px,
      rgba(0, 0, 0, 0.00880581) 14.23729px,
      rgba(0, 0, 0, 0.420755) 15.42373px,
      rgba(0, 0, 0, 0.0903278) 16.61017px,
      rgba(0, 0, 0, 0.448022) 17.79661px,
      rgba(0, 0, 0, 0.0189341) 18.98305px,
      rgba(0, 0, 0, 0.360846) 20.16949px,
      rgba(0, 0, 0, 0.133989) 21.35593px,
      rgba(0, 0, 0, 0.352152) 22.54237px,
      rgba(0, 0, 0, 0.0751177) 23.72881px,
      rgba(0, 0, 0, 0.439771) 24.91525px,
      rgba(0, 0, 0, 0.0175497) 26.10169px,
      rgba(0, 0, 0, 0.421357) 27.28814px,
      rgba(0, 0, 0, 0.0555667) 28.47458px,
      rgba(0, 0, 0, 0.489157) 29.66102px,
      rgba(0, 0, 0, 0.119573) 30.84746px,
      rgba(0, 0, 0, 0.420911) 32.0339px,
      rgba(0, 0, 0, 0.0998926) 33.22034px,
      rgba(0, 0, 0, 0.375328) 34.40678px,
      rgba(0, 0, 0, 0.0328624) 35.59322px,
      rgba(0, 0, 0, 0.350068) 36.77966px,
      rgba(0, 0, 0, 0.0623443) 37.9661px,
      rgba(0, 0, 0, 0.380426) 39.15254px,
      rgba(0, 0, 0, 0.0689493) 40.33898px,
      rgba(0, 0, 0, 0.355741) 41.52542px,
      rgba(0, 0, 0, 0.0159071) 42.71186px,
      rgba(0, 0, 0, 0.397758) 43.89831px,
      rgba(0, 0, 0, 0.131965) 45.08475px,
      rgba(0, 0, 0, 0.406735) 46.27119px,
      rgba(0, 0, 0, 0.0872066) 47.45763px,
      rgba(0, 0, 0, 0.47179) 48.64407px,
      rgba(0, 0, 0, 0.0246181) 49.83051px,
      rgba(0, 0, 0, 0.485963) 51.01695px,
      rgba(0, 0, 0, 0.0646488) 52.20339px,
      rgba(0, 0, 0, 0.485036) 53.38983px,
      rgba(0, 0, 0, 0.0164265) 54.57627px,
      rgba(0, 0, 0, 0.458715) 55.76271px,
      rgba(0, 0, 0, 0.0952802) 56.94915px,
      rgba(0, 0, 0, 0.494791) 58.13559px,
      rgba(0, 0, 0, 0.000387405) 59.32203px,
      rgba(0, 0, 0, 0.382743) 60.50847px,
      rgba(0, 0, 0, 0.0194044) 61.69492px,
      rgba(0, 0, 0, 0.498324) 62.88136px,
      rgba(0, 0, 0, 0.138929) 64.0678px,
      rgba(0, 0, 0, 0.497856) 65.25424px,
      rgba(0, 0, 0, 0.0188161) 66.44068px,
      rgba(0, 0, 0, 0.41706) 67.62712px,
      rgba(0, 0, 0, 0.0922068) 68.81356px,
      rgba(0, 0, 0, 0.499399) 70px
    ),
    conic-gradient(
      rgba(255, 255, 255, 0) 80deg,
      rgba(255, 255, 255, 0.04) 90deg,
      rgba(255, 255, 255, 0) 95deg,
      rgba(255, 255, 255, 0) 260deg,
      rgba(255, 255, 255, 0.04) 270deg,
      rgba(255, 255, 255, 0) 285deg
    ),
    conic-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.22) 20deg,
      rgba(255, 255, 255, 0.29) 40deg,
      rgba(255, 255, 255, 0) 70deg,
      rgba(255, 255, 255, 0) 180deg,
      rgba(255, 255, 255, 0.18) 200deg,
      rgba(255, 255, 255, 0.15) 210deg,
      rgba(255, 255, 255, 0) 250deg
    ),
    black;
  background-blend-mode: normal, normal, color-dodge, normal, normal;
  transform-style: preserve-3d;

  bottom: 20px;

   &.disc-1 {
    left: calc(50% - 100px);
    transform: translateX(-50%) rotate3d(0, 1, 0, -50deg);
    z-index: 6;
      &:before {
        background-image: url(${gh.src});
      }
  }
  &.disc-2 {
    left: calc(50% - 50px);
    transform: translateX(-50%) rotate3d(0, 1, 0, -50deg);
    z-index: 5;
    &:before {
      background-image: url(${miki.src});
    }
  }
  &.disc-3 {
    left: 50%;
    transform: translateX(-50%) rotate3d(0, 1, 0, -50deg);
    z-index: 4;
    &:before {
      background-image: url(${hmc.src});
    }
  }
  &.disc-4 {
    left: calc(50% + 50px);
    transform: translateX(-50%) rotate3d(0, 1, 0, -50deg);
    z-index: 3;
    &:before {
      background-image: url(${rocky.src});
    }
  }
  &.disc-5 {
    left: calc(50% + 100px);
    transform: translateX(-50%) rotate3d(0, 1, 0, -50deg);
    z-index: 2;
    &:before {
      background-image: url(${tpab.src});
    }
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 30%;
    height: 30%;
    margin-left: -15%;
    margin-top: -15%;
    border-radius: 100%;
    background-size: cover;
    // animation: spin 2s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotateX(50deg) rotate(0deg);
    }
    to {
      transform: rotateX(50deg) rotate(360deg);
    }
  }
`;