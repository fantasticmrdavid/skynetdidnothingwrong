import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const SkynetLogo = ({ size }) => {
  const {
    Fork,
    Logo,
    ProgressTriangle,
    Triangle,
  } = styles;

  return (
    <Logo size={size}>
      <Triangle />
      <ProgressTriangle />
      <Fork>Y</Fork>
    </Logo>
  );
};

SkynetLogo.propTypes = {
  size: PropTypes.string,
};

export default SkynetLogo;
