import React from 'react';
import PropTypes from 'prop-types';
import Post from 'components/Post';

const PostList = ({ posts }) => {
  return (
    <ul>{posts.map(p => <li key={`post_${p.id}`}><Post {...p} /></li>)}</ul>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostList;
