import React from 'react';
import { Switch, Route } from 'react-router';
import Home from 'views/Home';
import Template from 'components/Template';

const Routes = () => {
  return (
    <Template>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Template>
  );
};

export default Routes;
