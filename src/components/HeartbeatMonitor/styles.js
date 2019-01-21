import styled, { keyframes } from 'styled-components';

const heartRateIn = keyframes`
  0% {
    width: 100%;
  }
  50% {
    width: 0;
  }
  100% {
    width: 0;
  }
`;

const heartRateOut = keyframes`
  0% {
    left: -120%;
  }
  30% {
    left: -120%;
  }
  100% {
    left: 0;
  }
`;

export const Heartbeat = styled.div`
  width: 150px;
  height: 140px;
  position: relative;
  margin: 20px auto;
  opacity: ${props => (props.focused ? 0.8 : 0.3)};
`;

export const FadeIn = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  top: ${props => `${props.offset}px`};
  right: 0;
  animation: ${props => `${heartRateIn} ${((250 - props.rate) / 100) * 2}s linear infinite`};
`;

export const FadeOut = styled.div`
  position: absolute;
  width: 120%;
  height: 100%;
  top: ${props => `${props.offset}px`};
  left: -120%;
  animation: ${props => `${heartRateOut} ${((250 - props.rate) / 100) * 2}s linear infinite`};
  background: rgba(255, 255, 255, 1);
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0) 100%);
`;
