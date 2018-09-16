import React from 'react';
import * as styles from './styles';

const SkynetLogo = () => {
  const {
    Fork,
    Logo,
    ProgressTriangle,
    Triangle,
  } = styles;

  return (
    <Logo>
      <Triangle />
      <ProgressTriangle />
      <Fork>Y</Fork>
    </Logo>
  );
};

export default SkynetLogo;
