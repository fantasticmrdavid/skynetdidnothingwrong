import { keyframes } from 'styled-components';

export const confirmReset = keyframes`
  0% { opacity: 1.0; }
  2% { opacity: 0.2; }
  4% { opacity: 1.0; }
  6% { opacity: 0.2; }
  8% { opacity: 1.0; }
  10% { opacity: 0.2; }
  12% { opacity: 1.0; }
  14% { opacity: 0.2; }
  16% { opacity: 1.0; }
  18% { opacity: 0.2; }
  20% { opacity: 1.0; }
  22% { opacity: 0.2; }
  24% { opacity: 1.0; }
  26% {
    opacity: 0.3;
    top: 0px;
  }
  80% {
    opacity: 0;
    top: -20px;
  }
  100% {
    opacity: 0;
    top: -20px;
    display: none;
  }
`;

export const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const fadeOut = keyframes`
  0% { opacity: 1; }
  99% { z-index: 12; }
  100% {
    opacity: 0;
    display: none;
    z-index: -1;
  }
`;

export const expand = keyframes`
  0% {
    max-height: 0px;
    overflow: hidden;
  }
  100% {
    max-height: 2500px;
  }
`;

export const breatheOpacity = keyframes`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
`;
