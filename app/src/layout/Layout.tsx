import React from 'react';
import './Layout.less';
import { HashRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const Layout: React.FC = () => (
  <div className="container">
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  </div>
);
export default Layout;
