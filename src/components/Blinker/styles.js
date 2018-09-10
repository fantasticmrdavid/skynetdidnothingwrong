import styled, { keyframes } from 'styled-components';
import theme from 'styles/theme';

const blink = keyframes`
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
  100% { opacity: 1.0; }
`;

export const Blinker = styled.div`
  position: relative;
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${theme.colorFont};
  margin-left: 0.15rem;
  animation: ${blink} 1s step-end infinite;
  border-bottom: 2px solid ${theme.colorFont};
`;
