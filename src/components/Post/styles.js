import styled from 'styled-components';
import theme from 'styles/theme';
import { breatheOpacity, expand, fadeIn } from 'styles/animations';

export const Article = styled.article`
  position: relative;
  z-index: 1;
  padding: 1em 2em;
  opacity: 0;
  animation: ${fadeIn} 0.3s normal linear;
  animation-fill-mode: forwards;
  background-color: rgba(255, 100, 100, 0.2);
  border: 1px solid rgba(255, 100, 100, 0.2);
  transform: translateZ(0);
`;

export const Underlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.7;
  z-index: 1;
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
`;

export const Content = styled.section`
  position: relative;
  padding: 1em 0;
  line-height: 1.5;
  animation: ${expand} 1.2s normal linear;
  animation-fill-mode: forwards;
  transform: translateZ(0);
`;

export const Meta = styled.section`
  color: ${theme.colorGrey};
`;

export const Signature = styled.div`
  animation: ${breatheOpacity} 5s infinite;
  transform: translateZ(0);
`;

export const Title = styled.h2`
  font-family: 'Teko', sans-serif;
  font-size: 2rem;
  padding: 0.5em 0;
  color: #da3a1d;
`;
