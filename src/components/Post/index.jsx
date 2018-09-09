import React from 'react';
import PropTypes from 'prop-types';
import TerminalText from 'components/TerminalText';
import * as styles from './styles';

const Post = ({ title, content, createdAt }) => {
  const {
    Article,
    Content,
    Meta,
    Title,
  } = styles;

  return (
    <Article>
      <Title>{ title }</Title>
      <Meta>{ new Date(createdAt).toLocaleDateString() }</Meta>
      <Content>
        <TerminalText blinker>{ content }</TerminalText>
      </Content>
    </Article>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
};

export default Post;
