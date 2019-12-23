import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Discover from '../pages/discover/Discover'

const Content: React.FC = () => {
  return (
    <Router>
    <div className="content">
      <div className="view">
           <Route path='{Discover}' component={Discover} />
      </div>
    </div>
    </Router>
  );
};

export default Content;
