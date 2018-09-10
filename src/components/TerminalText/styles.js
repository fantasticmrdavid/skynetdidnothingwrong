import styled, { keyframes } from 'styled-components';

const confirmReset = keyframes`
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
  }
`;

export const Terminal = styled.div`
  position: relative;
  transition: 0.3s;
  animation: ${props => (props.reset ? `${confirmReset} 3s normal linear` : undefined)};
  animation-fill-mode: forwards;
`;
