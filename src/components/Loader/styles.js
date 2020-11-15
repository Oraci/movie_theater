import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(68, 79, 96, 0.4);
`;

export const Spinner = styled.svg`
  z-index: 999;
  position: fixed;
  animation: rotate 1s linear infinite;
  width: 120px;
  height: 120px;
  left: 45%;
  top: 45%;

  & .path {
    stroke: #fff;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
