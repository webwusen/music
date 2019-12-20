import React from 'react';
import './Layout.less';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
const Layout: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
