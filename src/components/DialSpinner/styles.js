import styled from 'styled-components';

export const Dial = styled.div`
  position: ${props => (props.scaleToFit ? 'absolute' : 'relative')};
  width: ${props => (props.scaleToFit ? '100%' : '200px')};
  height: ${props => (props.scaleToFit ? '100%' : '200px')};
`;
