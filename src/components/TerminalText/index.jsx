import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Blinker from 'components/Blinker';
import { getRandomInt } from 'helpers/number';
import * as styles from './styles';

const LETTER_INTERVAL = 30;
const COMPLETE_DELAY_INTERVAL = 2000;

class TerminalText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: <Fragment />,
      index: 0,
      letters: props.children.split(''),
      currentLine: '',
      complete: false,
      paused: false,
    };

    this.boundAddChar = this.addChar.bind(this);
    this.boundPauseTypewriter = this.pauseTypewriter.bind(this);
    this.boundStartTypewriter = this.startTypewriter.bind(this);
    this.boundStartTypewriter();
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this.boundPauseTypewriter();
    this._isMounted = false;
  }

  addChar() {
    const {
      complete,
      currentLine,
      index,
      letters,
      text,
    } = this.state;

    const { children, onComplete, resetOnComplete } = this.props;

    if (complete) {
      this.boundPauseTypewriter();
      setTimeout(() => {
        if (!!onComplete) onComplete();
        if (this._isMounted && resetOnComplete) {
          this.setState({
            text: <Fragment />,
            index: 0,
            letters: children.split(''),
            currentLine: '',
            complete: false,
            paused: false,
          });
          this.boundStartTypewriter();
        }
        return true;
      }, COMPLETE_DELAY_INTERVAL);
    }

    const nextChar = letters[index];

    if (nextChar === '\t') {
      this.boundPauseTypewriter();
      return setTimeout(() => {
        this.setState({
          index: index + 1,
        });
        this.boundStartTypewriter();
      }, 1000 * getRandomInt(2));
    }

    return this.setState(index < letters.length ?
      {
        text: nextChar === '\n' ? <Fragment>{text}{currentLine}<br /></Fragment> : <Fragment>{text}</Fragment>,
        currentLine: nextChar === '\n' ? '' : `${currentLine}${nextChar}`,
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
    const {
      complete,
      currentLine,
      paused,
      text,
    } = this.state;
    const { blinker, resetOnComplete } = this.props;
    const { Terminal } = styles;

    return (
      <Terminal reset={complete && resetOnComplete}>
        {text}{currentLine}
        {blinker && <Blinker solid={!complete && !paused} />}
      </Terminal>);
  }
}

TerminalText.propTypes = {
  children: PropTypes.node.isRequired,
  blinker: PropTypes.bool,
  onComplete: PropTypes.func,
  resetOnComplete: PropTypes.bool,
};

export default TerminalText;
