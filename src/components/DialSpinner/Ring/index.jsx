import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const Ring = ({ size, width, cut }) => {
  const {
    Circle,
    Cut,
    CutInner,
    Wrapper,
  } = styles;

  return (
    <Wrapper size={size}>
      <Circle size={size} width={width}>
        <Cut cut={cut}>
          <CutInner />
        </Cut>
      </Circle>
    </Wrapper>
  );
};

Ring.propTypes = {
  cut: PropTypes.number,
  size: PropTypes.number,
  width: PropTypes.number,
};

export default Ring;
