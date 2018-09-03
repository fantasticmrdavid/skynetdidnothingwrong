import React from 'react';
import PropTypes from 'prop-types';
import Post from 'components/Post';
import loadingMessages from './loadingMessages';

const PostList = ({ loading, posts }) => {
  if (loading) return <div>{loadingMessages[Math.floor(Math.random() * loadingMessages.length)]}</div>;
  return (
    <ul>{posts.map(p => <li key={`post_${p.id}`}><Post {...p} /></li>)}</ul>
  );
};

PostList.propTypes = {
  loading: PropTypes.bool,
  posts: PropTypes.array.isRequired,
};

export default PostList;
