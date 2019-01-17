import styled from 'styled-components';

export const List = styled.ul`
  opacity: ${props => (props.focused ? 0.8 : 0.1)};
  transition: 0.3s;
`;
