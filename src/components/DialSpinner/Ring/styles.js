import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: ${props => `${(100 - props.size / 2)}%`};
  left: ${props => `${(100 - props.size) / 2}%`};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
`;

export const Circle = styled.div`
  position: absolute;
  top: ${props => `${props.width}px`};
  left: ${props => `${props.width}px`};
  width: ${props => `${props.size - (props.width * 2)}%`};
  height: ${props => `${props.size - (props.width * 2)}%`};
  border-radius: 50%;
  border: ${props => `${props.width}px solid #333`};
`;

export const Cut = styled.div`
  position: absolute;
  top: 49%;
  left: 49%;
  width: 2%;
  height: 2%;
  transform: ${props => `skewX(${90 - props.cut}deg)`};
`;

export const CutInner = styled.div`
  position: absolute;
  bottom: 50%;
  right: 50%;
  width: 5000%;
  height: 5000%;
  border-radius: 100% 0 0 0;
  background: white;
`;
