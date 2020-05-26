import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import styles from './index.module.less';

const Layout: React.FC = () => {
  return (
    <div className={`${styles['container']}`}>
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;
