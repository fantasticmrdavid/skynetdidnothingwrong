import styled from 'styled-components';
import theme from 'styles/theme';

export const TypeCursor = styled.div`
  position: relative;
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${theme.colorFont};
  margin-left: 0.15rem;
  border-bottom: 2px solid ${theme.colorFont};
`;
