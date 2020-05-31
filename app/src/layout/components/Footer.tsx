import React from 'react';
import styles from '@/layout/index.module.less';

const Footer: React.FC = () => (
  <div className={`${styles['footer']} theme-element-footer`}>
    <div className={`${styles['play-btn']} theme-element-paly-btn`}>
      <div className={`${styles['play-prev']}`}>
        <span className={`iconfont iconprev`}></span>
      </div>
      <div className={`${styles['play-pause']}`}>
        <span className={`iconfont iconplay`}></span>
        <span hidden className={`iconfont iconpause`}></span>
      </div>
      <div className={`${styles['play-next']}`}>
        <span className={`iconfont iconnext`}></span>
      </div>
    </div>
    <div className={`${styles['play-box']}`}></div>
    <div className={`${styles['paly-tools']}`}></div>
  </div>
);

export default Footer;
