import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as React from 'react';
import List from '../layout/Layout'

const GetRoutes = () => {
  return (
    <Router>
      <Switch>
          <Route path="/" component={List} />
      </Switch>
    </Router>
  );
};

export default GetRoutes;
