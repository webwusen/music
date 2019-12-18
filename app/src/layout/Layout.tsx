import React from 'react';
import './Layout.less';
import Header from './Header';

const Layout: React.FC = () => {
  return (
    <div className="container">
      <Header />
    </div>
  )
};

export default Layout;