import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Blinker from 'components/Blinker';

const LETTER_INTERVAL = 30;

class TerminalText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      index: 0,
      letters: props.children.split(''),
      complete: false,
    };

    this.boundAddChar = this.addChar.bind(this);
    this.typewriter = setInterval(() => {
      this.boundAddChar();
    }, LETTER_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.typewriter);
  }

  addChar() {
    const {
      complete,
      index,
      letters,
      text,
    } = this.state;
    if (complete) return false;
    return this.setState(index < letters.length ?
      {
        text: text + letters[index],
        index: index + 1,
      } : {
        complete: true,
      });
  }

  render() {
    const { complete } = this.state;
    return <Fragment>{this.state.text}{complete ? <Blinker /> : null}</Fragment>;
  }
}

TerminalText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TerminalText;
