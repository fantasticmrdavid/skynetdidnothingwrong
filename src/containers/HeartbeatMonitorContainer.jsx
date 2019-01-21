import React from 'react';
import { connect } from 'react-redux';
import HeartbeatMonitor from 'components/HeartbeatMonitor';

const HeartbeatMonitorContainer = (props) => {
  return <HeartbeatMonitor {...props} />;
};

const mapStateToProps = (state) => {
  const { rate } = state.heartbeat;
  const { focused } = state.logStory;
  return {
    focused,
    rate,
  };
};

export default connect(
  mapStateToProps,
)(HeartbeatMonitorContainer);
