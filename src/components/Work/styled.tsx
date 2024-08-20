import styled from 'styled-components';


export const WorkContainer = styled.div`
    display: none;
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
`;

export const WorkElement = styled.div`
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    width: 72vw;
    height: 75vh;
    background-color: red;

    &:nth-child(1) {
      background-color: blue;
    }
    &:nth-child(2) {
      background-color: green;
    }
`;