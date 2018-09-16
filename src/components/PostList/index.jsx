import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from 'components/Post';
import LoadingDialog from 'components/LoadingDialog';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.boundCheckPostsReady = this.checkPostsReady.bind(this);

    this.state = {
      ready: false,
    };
  }

  checkPostsReady() {
    const { loading, posts } = this.props;
    if (!loading && posts.length) {
      this.setState({ ready: true });
    }
  }

  render() {
    const { ready } = this.state;
    const { loading, posts } = this.props;
    if (!ready) {
      return <LoadingDialog loading={loading} readyCheck={this.boundCheckPostsReady} />;
    }
    return (
      <ul>{posts.map(p => <li key={`post_${p.id}`}><Post {...p} /></li>)}</ul>
    );
  }
}

PostList.propTypes = {
  loading: PropTypes.bool,
  posts: PropTypes.array.isRequired,
};

export default PostList;
