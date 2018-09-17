import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SkynetLogo from 'components/SkynetLogo';
import TerminalText from 'components/TerminalText';
import loadingMessages from './loadingMessages';
import * as styles from './styles';

const COMPLETE_DELAY_INTERVAL = 1000;

class LoadingDialog extends Component {
  constructor(props) {
    super(props);

    this.boundLoadNextMessage = this.loadNextMessage.bind(this);
    this.boundCheckLoading = this.checkLoading.bind(this);
    this.boundStartChecking = this.startCheck.bind(this);
    this.boundStopChecking = this.stopCheck.bind(this);
    this.boundStartChecking();

    this.state = {
      loadingMessage: loadingMessages[Math.floor(Math.random() * loadingMessages.length)],
      complete: false,
    };
  }

  componentWillUnmount() {
    this.boundStopChecking();
  }

  checkLoading() {
    const { complete } = this.state;
    const { loading } = this.props;

    if (!loading && !complete) {
      setTimeout(() => {
        this.boundStopChecking();
        this.setState({
          complete: true,
        });

        return true;
      }, COMPLETE_DELAY_INTERVAL);
    }

    return false;
  }

  loadNextMessage() {
    const { readyCheck } = this.props;
    const { complete } = this.state;
    readyCheck();

    if (!complete) {
      this.setState({
        loadingMessage: loadingMessages[Math.floor(Math.random() * loadingMessages.length)],
      });
    }
  }

  startCheck() {
    this.checking = setInterval(() => {
      this.boundCheckLoading();
    }, 30);
  }

  stopCheck() {
    clearInterval(this.checking);
  }

  render() {
    const { Content, LogoContainer, Screen } = styles;
    const { loadingMessage, complete } = this.state;

    return (
      <Screen complete={complete}>
        <Content complete={complete}>
          <LogoContainer>
            <SkynetLogo />
          </LogoContainer>
          <TerminalText blinker onComplete={this.boundLoadNextMessage} resetOnComplete>{loadingMessage}</TerminalText>
        </Content>
      </Screen>
    );
  }
}

LoadingDialog.propTypes = {
  loading: PropTypes.bool,
  readyCheck: PropTypes.func.isRequired,
};

export default LoadingDialog;
