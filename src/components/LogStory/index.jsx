import React, { Component } from 'react';
import TerminalText from 'components/TerminalText';
import * as styles from './styles';
import storyData from './data';

class LogStory extends Component {
  constructor() {
    super();
    const story = storyData[Math.floor(Math.random() * storyData.length)];
    this.state = {
      story,
    };
  }

  render() {
    const { story } = this.state;
    const { Story } = styles;
    const lines = story.content;
    return (
      <Story>
        <TerminalText blinker>
          {
            lines.reduce((acc, l) => {
              return acc.concat(`\n${l}`);
            })
          }
        </TerminalText>
      </Story>
    );
  }
}

export default LogStory;
