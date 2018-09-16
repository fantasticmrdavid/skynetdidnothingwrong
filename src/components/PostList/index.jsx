import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from 'components/Post';
import TerminalText from 'components/TerminalText';
import loadingMessages from './loadingMessages';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.boundCheckPostsReady = this.checkPostsReady.bind(this);
    this.boundLoadNextMessage = this.loadNextMessage.bind(this);

    this.state = {
      loadingMessage: loadingMessages[Math.floor(Math.random() * loadingMessages.length)],
      ready: false,
    };
  }

  checkPostsReady() {
    const { loading, posts } = this.props;
    if (!loading && posts.length) {
      this.setState({ ready: true });
    }
  }

  loadNextMessage() {
    this.boundCheckPostsReady();
    this.setState({
      loadingMessage: loadingMessages[Math.floor(Math.random() * loadingMessages.length)],
    });
  }

  render() {
    const { loadingMessage, ready } = this.state;
    const { posts } = this.props;
    if (!ready) {
      return <TerminalText blinker onComplete={this.boundLoadNextMessage} resetOnComplete>{loadingMessage}</TerminalText>;
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
