import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const HeartbeatMonitor = ({ focused, rate }) => {
  const {
    Heartbeat,
    FadeIn,
    FadeOut,
  } = styles;

  const topOffset = (220 - rate) / 2;

  const points = rate > 200
    ? `0,
      111 5,
      111 11,
      111 15.514,
      ${rate / 1.9786} 23.524,
      ${rate / 8} 38.514,
      ${rate / 1.9786} 44.595,
      ${rate / 10} 50.676,
      ${rate / 1.9786} 57.771,
      ${rate / 10} 62.838,
      ${rate / 1.61806} 71.959,
      ${rate / 9} 80.067,
      ${rate / 1.41223} 84.122,
      ${rate / 10} 97.297,
      ${rate / 1.9786} 103.379,
      ${rate / 10} 110.473,
      ${rate / 1.9786} 150,
      ${rate / 1.9786}`
    : `0,
      ${rate / 1.9786} 38.514,
      ${rate / 1.9786} 44.595,
      ${rate / 2.70076} 50.676,
      ${rate / 1.9786} 57.771,
      ${rate / 1.9786} 62.838,
      ${rate / 1.61806} 71.959,
      ${rate / 10} 80.067,
      ${rate / 1.41223} 84.122,
      ${rate / 1.9786} 97.297,
      ${rate / 1.9786} 103.379,
      ${rate / 2.2267} 110.473,
      ${rate / 1.9786} 150,
      ${rate / 1.9786}`;

  return (
    <Heartbeat focused={focused}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="150px"
        height="140px"
        viewBox="0 0 150 140"
        transform={`translate(0, ${topOffset})`}
      >
        <polyline
          fill="none"
          stroke={rate > 170 ? 'red' : '#333'}
          strokeWidth="1"
          strokeMiterlimit="10"
          points={points}
        />

      </svg>
      <FadeIn rate={rate} offset={topOffset} />
      <FadeOut rate={rate} offset={topOffset} />
    </Heartbeat>
  );
};

HeartbeatMonitor.propTypes = {
  focused: PropTypes.bool,
  rate: PropTypes.number.isRequired,
};

export default HeartbeatMonitor;
