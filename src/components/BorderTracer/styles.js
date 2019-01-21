import styled, { keyframes } from 'styled-components';

const traceLeft = keyframes`
  0% {
    top: -1px;
    left: 50%;
    opacity: 0;
  }
  0.1% {
    opacity: 0.5;
  }
  2.4% {
    width: 50px;
    height: 2px;
  }
  2.5% {
    top: -1px;
    left: 0px;
    width: 2px;
    height: 50px;
  }
  7.4% {
    width: 2px;
    height: 50px;
  }
  7.5% {
    top: 100%;
    left: 0px;
    width: 50px;
    height: 2px;
  }
  9% {
    opacity: 0.5;
  }
  10% {
    top: 100%;
    left: 50%;
    opacity: 0;
  }
`;

const traceRight = keyframes`
  0% {
    top: -1px;
    left: 50%;
    opacity: 0;
  }
  0.1% {
    opacity: 0.5;
  }
  2.4% {
    width: 50px;
    height: 2px;
  }
  2.5% {
    top: -1px;
    left: 100%;
    width: 2px;
    height: 50px;
  }
  7.4% {
    width: 2px;
    height: 50px;
  }
  7.5% {
    top: 100%;
    left: 100%;
    width: 50px;
    height: 2px;
  }
  9% {
    opacity: 0.5;
  }
  10% {
    top: 100%;
    left: 50%;
    opacity: 0;
  }
`;

export const Tracer = styled.div`
  position: absolute;
  top: -1px;
  left: 50%;
  opacity: 0;
  width: 50px;
  height: 2px;
  z-index: 1;
  background: red;
  animation: ${props => (props.direction === 'left' ? `${traceLeft} 20s normal infinite` : `${traceRight} 20s normal infinite`)};
  animation-fill-mode: forwards;
`;
