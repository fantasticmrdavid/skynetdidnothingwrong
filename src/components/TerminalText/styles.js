import styled from 'styled-components';
import { confirmReset } from 'styles/animations';

export const Terminal = styled.div`
  position: relative;
  transition: 0.3s;
  animation: ${props => (props.reset ? `${confirmReset} 3s normal linear` : undefined)};
  animation-fill-mode: forwards;
`;
