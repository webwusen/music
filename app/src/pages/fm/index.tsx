import React, { useEffect } from 'react';
import styles from './index.module.less';
import { getPersonalFm } from '@/api/layout';

const Fm: React.FC = () => {

  useEffect(() => {
    getPersonalFm().then((res: any) => {
      console.log(res)
    }).catch()
  }, [])

  return (
    <div className={`${styles['fm']}`}>
      <div className={`${styles['song']}`}>
        <div className={`${styles['song-left']}`}>
          <div className={`${styles['music-box']}`}>

          </div>
        </div>
        <div className={`${styles['song-right']}`}></div>
      </div>
    </div>
  )
}

export default Fm;
