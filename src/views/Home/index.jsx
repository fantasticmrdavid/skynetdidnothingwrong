import React, { Component } from 'react';
import { logPageView } from 'helpers/google';
import HomeMasthead from 'components/HomeMasthead';

class Home extends Component {
  componentWillMount() {
    logPageView();
  }

  render() {
    return (
      <div>
        <HomeMasthead />
      </div>
    );
  }
}

export default Home;
