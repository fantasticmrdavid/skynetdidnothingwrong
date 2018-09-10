import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const Blinker = ({ solid }) => {
  const { Cursor } = styles;
  return <Cursor solid={solid} />;
};

Blinker.propTypes = {
  solid: PropTypes.bool,
};

export default Blinker;
