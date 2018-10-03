import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: scale(${props => (props.size === 'small' ? 0.5 : 1)});
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid black;
`;

export const ProgressTriangle = Triangle.extend`
  position: absolute;
  top: 0;
  border-bottom-color: tomato;
`;

export const Fork = styled.div`
  position: absolute;
  font-family: 'Montserrat';
  top: -10px;
  color: white;
  font-size: 65px;
  transform: scale(1.5,1);
`;
