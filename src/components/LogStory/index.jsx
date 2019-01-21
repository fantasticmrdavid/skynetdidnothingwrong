import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TerminalText from 'components/TerminalText';
import { getRandomElement } from 'helpers/array';
import * as styles from './styles';
import storyData from './data';

class LogStory extends Component {
  constructor() {
    super();
    const story = getRandomElement(storyData);
    this.boundLoadNewStory = this.loadNewStory.bind(this);
    this.state = {
      story: story.content.reduce((acc, l) => acc.concat(`\n${l}`)),
    };
  }

  loadNewStory() {
    const { resetHeartRate } = this.props;
    const story = getRandomElement(storyData);

    this.setState({
      story: story.content.reduce((acc, l) => acc.concat(`\n${l}`)),
    });

    resetHeartRate();
  }

  render() {
    const {
      focused,
      hoverOn,
      hoverOff,
      lowerHeartRate,
      raiseHeartRate,
    } = this.props;
    const { story } = this.state;
    const { Story } = styles;
    return (
      <Story focused={focused} onMouseOver={hoverOn} onMouseLeave={hoverOff} onFocus={hoverOn}>
        <TerminalText
          blinker
          lowerHeartRate={lowerHeartRate}
          onComplete={this.boundLoadNewStory}
          resetOnComplete
          raiseHeartRate={raiseHeartRate}
        >
          {story}
        </TerminalText>
      </Story>
    );
  }
}

LogStory.propTypes = {
  focused: PropTypes.bool,
  hoverOn: PropTypes.func.isRequired,
  hoverOff: PropTypes.func.isRequired,
  lowerHeartRate: PropTypes.func.isRequired,
  resetHeartRate: PropTypes.func.isRequired,
  raiseHeartRate: PropTypes.func.isRequired,
};

export default LogStory;
