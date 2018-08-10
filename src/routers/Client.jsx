import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

const Client = ({ store }) => {
  return (
    <Provider store={store}>
      <div>Hello!</div>
    </Provider>
  );
};

Client.propTypes = {
  store: PropTypes.object,
};

export default Client;
