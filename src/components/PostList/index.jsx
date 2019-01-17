import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Post from 'components/Post';
import LoadingDialog from 'components/LoadingDialog';
import * as styles from './styles';

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
    const { focused, loading, posts } = this.props;
    const { List } = styles;

    return (
      <Fragment>
        <LoadingDialog loading={loading} readyCheck={this.boundCheckPostsReady} />
        { ready && <List focused={focused}>{posts.map(p => <li key={`post_${p.id}`}><Post {...p} /></li>)}</List> }
      </Fragment>
    );
  }
}

PostList.propTypes = {
  focused: PropTypes.bool,
  loading: PropTypes.bool,
  posts: PropTypes.array.isRequired,
};

export default PostList;
