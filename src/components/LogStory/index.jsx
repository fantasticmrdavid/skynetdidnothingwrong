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
    const story = getRandomElement(storyData);
    this.state = {
      story: story.content.reduce((acc, l) => acc.concat(`\n${l}`)),
    };
  }

  render() {
    const { focused, hoverOn, hoverOff } = this.props;
    const { story } = this.state;
    const { Story } = styles;
    return (
      <Story focused={focused} onMouseOver={hoverOn} onMouseLeave={hoverOff} onFocus={hoverOn}>
        <TerminalText blinker resetOnComplete onComplete={this.boundLoadNewStory}>{story}</TerminalText>
      </Story>
    );
  }
}

LogStory.propTypes = {
  focused: PropTypes.bool,
  hoverOn: PropTypes.func.isRequired,
  hoverOff: PropTypes.func.isRequired,
};

export default LogStory;
