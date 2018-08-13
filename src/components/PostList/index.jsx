import React from 'react';
import PropTypes from 'prop-types';
import Post from 'components/Post';

const PostList = ({ posts }) => {
  return (
    <ul>{posts.map(p => <li><Post {...p} key={`post_${p.id}`} /></li>)}</ul>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostList;
