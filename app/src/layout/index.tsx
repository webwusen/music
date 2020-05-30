import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import styles from './index.module.less';
import { localStorageGet } from '@/utils/localStorage';

const Layout: React.FC = () => {
  // 获取上次用户选择的主题
  const userTheme = localStorageGet('bgTheme') || 'theme-default';
  const [theme, setTheme] = useState(userTheme);

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
