import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Blinker from 'components/Blinker';
import { getRandomInt } from 'helpers/number';

const LETTER_INTERVAL = 30;

class TerminalText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: <Fragment />,
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

    const nextChar = letters[index];
    if (nextChar === '\t') {
      clearInterval(this.typewriter);
      return setTimeout(() => {
        this.setState({
          index: index + 1,
        });
        this.typewriter = setInterval(() => {
          this.boundAddChar();
        }, LETTER_INTERVAL);
      }, 1000 * getRandomInt(3));
    }

    return this.setState(index < letters.length ?
      {
        text: <Fragment>{text}{(nextChar === '\n' ? <br /> : nextChar)}</Fragment>,
        index: index + 1,
      } : {
        complete: true,
      },
    );
  }

  render() {
    const { complete } = this.state;
    const { blinker } = this.props;
    return <Fragment>{this.state.text}{complete && blinker ? <Blinker /> : null}</Fragment>;
  }
}

TerminalText.propTypes = {
  children: PropTypes.node.isRequired,
  blinker: PropTypes.bool,
};

export default TerminalText;
