import styled from 'styled-components';
import { confirmReset, fadeOut } from 'styles/animations';

export const Screen = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${props => (props.complete ? `${fadeOut} 1s normal linear` : undefined)};
  animation-delay: 1s;
  animation-fill-mode: forwards;
  z-index: 12;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${props => (props.complete ? `${confirmReset} 3s normal linear` : undefined)};
  animation-fill-mode: forwards;
`;

export const LogoContainer = styled.div`
  margin-bottom: 0.5em;
`;
