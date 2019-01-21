import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'components/Nav';
import HeartbeatMonitorContainer from 'containers/HeartbeatMonitorContainer';
import LogStoryContainer from 'containers/LogStoryContainer';
import * as styles from './styles';

const Template = ({ children }) => {
  const {
    Container,
    Content,
    HeartbeatMonitorWrapper,
    LogStoryBg,
  } = styles;
  return (
    <Container>
      <HeartbeatMonitorWrapper>
        <HeartbeatMonitorContainer />
      </HeartbeatMonitorWrapper>
      <LogStoryBg>
        <LogStoryContainer />
      </LogStoryBg>
      <Content>
        <Nav />
        {children}
      </Content>
    </Container>
  );
};

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
