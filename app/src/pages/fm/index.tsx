import React from 'react';
import styles from './index.module.less';

const Fm: React.FC = () => (
  <div className={`${styles['fm']}`}>
    <div className={`${styles['song']}`}>
      <div className={`${styles['song-left']}`}></div>
      <div className={`${styles['song-right']}`}></div>
    </div>
  </div>

);

export default Fm;
