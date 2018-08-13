import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const Post = ({ title, content }) => {
  const {
    Article,
    Title,
  } = styles;

  return (
    <Article>
      <Title>{ title }</Title>
      <section>{ content }</section>
    </Article>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
