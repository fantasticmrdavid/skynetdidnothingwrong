import styled from 'styled-components';

export const Story = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  opacity: ${props => (props.focused ? 0.8 : 0.2)};
  font-size: 0.75rem;
  transform: translateZ(0);
  transition: 0.3s;
`;
