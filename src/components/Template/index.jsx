import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'components/Nav';

const Template = ({ children }) => {
  return (
    <main>
      <Nav />
      {children}
    </main>
  );
};

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
