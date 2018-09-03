import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { path } from 'ramda';
import PostList from 'components/PostList';

const PostListContainer = (props) => {
  return <PostList {...props} />;
};

const mapStateToProps = (state) => {
  const { firebase } = state;
  return {
    loading: path(['requesting', 'posts'], firebase),
    posts: path(['data', 'posts'], firebase) || [],
  };
};

export default compose(
  firebaseConnect([
    'posts',
  ]),
  connect(mapStateToProps),
)(PostListContainer);
