import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Home from 'views/Home';

const Client = ({ store }) => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

Client.propTypes = {
  store: PropTypes.object,
};

export default Client;
