import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Blinker from 'components/Blinker';
import { getRandomInt } from 'helpers/number';
import * as styles from './styles';

const LETTER_INTERVAL = 30;

class TerminalText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: <Fragment />,
      index: 0,
      letters: props.children.split(''),
      complete: false,
      paused: false,
    };

    this.boundAddChar = this.addChar.bind(this);
    this.boundPauseTypewriter = this.pauseTypewriter.bind(this);
    this.boundStartTypewriter = this.startTypewriter.bind(this);
    this.boundStartTypewriter();
  }

  componentWillUnmount() {
    this.boundPauseTypewriter();
  }

  addChar() {
    const {
      complete,
      index,
      letters,
      text,
    } = this.state;

    if (complete) {
      this.boundPauseTypewriter();
      return false;
    }

    const nextChar = letters[index];
    if (nextChar === '\t') {
      this.boundPauseTypewriter();
      return setTimeout(() => {
        this.setState({
          index: index + 1,
        });
        this.boundStartTypewriter();
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

  pauseTypewriter() {
    clearInterval(this.typewriter);
    this.setState({ paused: true });
  }

  startTypewriter() {
    const { paused } = this.state;
    this.typewriter = setInterval(() => {
      this.boundAddChar();
    }, LETTER_INTERVAL);
    if (paused) this.setState({ paused: false });
  }

  render() {
    const { complete, paused } = this.state;
    const { blinker } = this.props;
    const { TypeCursor } = styles;
    return (
      <Fragment>
        {this.state.text}
        {(complete || paused) && blinker ? <Blinker /> : null}
        {!complete && !paused && blinker ? <TypeCursor /> : null}
      </Fragment>);
  }
}

TerminalText.propTypes = {
  children: PropTypes.node.isRequired,
  blinker: PropTypes.bool,
};

export default TerminalText;
