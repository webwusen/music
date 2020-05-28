import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import styles from './index.module.less';

const Layout: React.FC = () => {
  const [theme, setTheme] = useState('theme-default');

  return (
    <div className={`${styles['container']} ${theme}`}>
      <Router>
        <Header themeFunc={setTheme} theme={theme} />
        <Content />
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;
