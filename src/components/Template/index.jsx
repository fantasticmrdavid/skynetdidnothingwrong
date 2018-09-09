import React from 'react';
import PropTypes from 'prop-types';
import LogStory from 'components/LogStory';
import Nav from 'components/Nav';
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
        <LogStory />
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
