import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Layout from '../layout/Layout'

const GetRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  );
};

export default GetRoutes;
