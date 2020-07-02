import React from 'react';
import styles from '@/layout/index.module.less';
import { SoundFilled } from '@ant-design/icons';

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
    <div className={`${styles['play-box']}`}>
      <span>00:00</span>
      <div className={`${styles['play-bar']}`}>
        <div className={`${styles['play-bar-in']}`}></div>
        <div className={`${styles['play-bar-btn']}`}></div>
      </div>
      <span>00:00</span>
    </div>
    <div className={`${styles['play-tools']}`}>
      <SoundFilled />
      <div className={`${styles['play-volume']}`}>
        <div className={`${styles['play-bar-in']}`}></div>
        <div className={`${styles['play-bar-btn']}`}></div>
      </div>
    </div>
  </div>
);

export default Footer;
