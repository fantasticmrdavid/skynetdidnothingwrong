import React from 'react';
import PropTypes from 'prop-types';
import Ring from './Ring';
import * as styles from './styles';

const DialSpinner = ({ scaleToFit }) => {
  const { Dial } = styles;

  return (
    <Dial scaleToFit={scaleToFit}>
      <Ring size={100} width={5} cut={20} />
      <Ring size={75} width={10} cut={45} />
      <Ring size={45} width={3} cut={30} />
    </Dial>
  );
};

DialSpinner.propTypes = {
  scaleToFit: PropTypes.bool,
};

export default DialSpinner;
