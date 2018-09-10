import React, { Component } from 'react';
import TerminalText from 'components/TerminalText';
import { getRandomElement } from 'helpers/array';
import * as styles from './styles';
import storyData from './data';

class LogStory extends Component {
  constructor() {
    super();
    const story = getRandomElement(storyData);
    this.state = {
      story: story.content.reduce((acc, l) => acc.concat(`\n${l}`)),
    };
  }

  render() {
    const { story } = this.state;
    const { Story } = styles;
    return (
      <Story>
        <TerminalText blinker>{ story }</TerminalText>
      </Story>
    );
  }
}

export default LogStory;
