import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'components/Nav';
import LogStoryContainer from 'containers/LogStoryContainer';
import * as styles from './styles';

const Template = ({ children }) => {
  const {
    Container,
    Content,
    LogStoryBg,
  } = styles;
  return (
    <Container>
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
