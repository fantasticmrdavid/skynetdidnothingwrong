import React, { Component } from 'react';
import PropTypes from 'prop-types';
import nl2br from 'react-nl2br';

import Blinker from 'components/Blinker';
import SkynetLogo from 'components/SkynetLogo';
import * as styles from './styles';

class Post extends Component {
  constructor() {
    super();

    this.boundCollapse = this.collapse.bind(this);
    this.boundExpand = this.expand.bind(this);

    this.state = {
      expanded: false,
    };
  }

  expand() {
    this.setState({ expanded: true });
  }

  collapse() {
    this.setState({ expanded: false });
  }

  render() {
    const { title, content, createdAt } = this.props;
    const { expanded } = this.state;
    const {
      Article,
      Content,
      ContentContainer,
      Meta,
      Signature,
      Title,
      Underlay,
    } = styles;

    return (
      <Article expanded={expanded}>
        <Underlay />
        <ContentContainer>
          <Title>{ title }</Title>
          <Meta>{ new Date(createdAt).toLocaleDateString() }</Meta>
          <Content expanded={expanded}>
            { nl2br(content) }<Blinker />
          </Content>
          <Signature>
            <SkynetLogo size="small" />
          </Signature>
        </ContentContainer>
      </Article>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
};

export default Post;
