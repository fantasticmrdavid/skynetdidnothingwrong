import styled from 'styled-components';
import theme from 'styles/theme';
import { fadeIn } from 'styles/animations';

export const Article = styled.article`
  position: relative;
  z-index: 1;
  padding: 1em 0;
  opacity: 0;
  animation: ${fadeIn} 0.3s normal linear;
  animation-fill-mode: forwards;
`;

export const Content = styled.section`
  padding: 1em 0;
  line-height: 1.5;
`;

export const Meta = styled.section`
  color: ${theme.colorGrey};
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0.5em 0;
`;
