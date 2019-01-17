import React from 'react';
import { connect } from 'react-redux';
import LogStory from 'components/LogStory';
import { focusLogStory, blurLogStory } from 'actions/logStory';

const LogStoryContainer = (props) => {
  return <LogStory {...props} />;
};

const mapStateToProps = (state) => {
  const { focused } = state.logStory;
  return {
    focused,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hoverOn: () => dispatch(focusLogStory()),
    hoverOff: () => dispatch(blurLogStory()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogStoryContainer);
