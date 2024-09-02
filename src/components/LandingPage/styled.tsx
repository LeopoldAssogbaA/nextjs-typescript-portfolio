import styled from "styled-components";

export const NameContainer = styled.div`
color: var(--color-deep-blue);
font-weight: 800;
width: auto;
height: auto;
position: absolute;
top: 25%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 1;
margin: 0;
text-align: center;
`;

export const Name = styled.h1`
  color: var(--color-deep-blue);
  font-weight: 800;
  font-size: 3em;
  mix-blend-mode: difference;
  width: auto;
  height: auto;
  line-height: 1.4em;
  z-index: 100;
  margin: 0;
`;

export const LandingPageContainer = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-cream);
    background-size: 100% 100%;
    display: grid;
    height: 200vh;
    cursor: none;

    .box {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .wave {
      opacity: 0;
      position: absolute;
      width: 1500px;
      height: 1600px;
      margin-left: -150px;
      margin-top: -250px;
      left: -110%;
      top: -120%;
      border-radius: 43%;
    }

    @keyframes rotate {
      from {transform: rotate(0deg);}
      to {transform: rotate(360deg);}
    }

    .wave.-one {
      animation: rotate 10000ms infinite linear;
      // opacity: 0.5;
      background: var(--color-sunflower);
    }

    .wave.-two {
      animation: rotate 6000ms infinite linear;
      // opacity: 0.4;
      background: var(--color-sunflower);
    }
      
    .center {
      z-index: 1000;
      position: absolute;
      left: 50%;
      top: 40%;
      opacity: 0;
      margin-left: -30px;
      margin-top: -15px;
    }
      
    .arrow-down-scroll {
      color: var(--color-deep-blue);
      font-size: 2em;
      display: none;
      z-index: 100;
      -moz-animation: bounce 2s infinite;
      -webkit-animation: bounce 2s infinite;
      animation: bounce 2s infinite;
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
       transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
`;

export const Work = styled.h2`
color: var(--color-deep-blue);
font-weight: 600;
font-size: 2em;
mix-blend-mode: difference;
width: auto;
height: auto;
line-height: 1.2em;
transform: none;
z-index: 4;
margin: 0px;
opacity: 0;
 .char {
  transform: translateY(115px);
  transition: transform .5s;
 }
`;


