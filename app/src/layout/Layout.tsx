import React from 'react';
import './Layout.less';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Leftmenu from './Leftmenu';
const Layout: React.FC = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Leftmenu />
        <Content />
        <Footer />
      </Router>
    </div>
  );
};
export default Layout;
