import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const BorderTracer = ({ direction }) => {
  const { Tracer } = styles;
  return <Tracer direction={direction} />;
};

BorderTracer.propTypes = {
  direction: PropTypes.string,
};

export default BorderTracer;
