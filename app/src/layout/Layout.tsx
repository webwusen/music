import React, { useEffect } from 'react';
import './Layout.less';
import { HashRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { login } from '@/api/layout';

const Layout: React.FC = () => {
  useEffect(() => {
    login({
      email: 'wysen1994@163.com',
      password: 'ws1994825'
    }).then((res: any) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="container">
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;
