import React from 'react';
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

export default Post;
