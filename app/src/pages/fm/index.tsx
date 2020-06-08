import React, { useState, useEffect } from 'react';
import styles from './index.module.less';
import { getPersonalFm, getSongDetail } from '@/api/layout';

const Fm: React.FC = () => {

  const [fmList, setFmlist] = useState([]);

  useEffect(() => {
    getPersonalFm().then((res: any) => {
      const list = res.data.map(async (item: any) => {
        const songDetail = await getSongDetail({
          ids: item.id
        })
        return {
          ...item,
          songUrl: songDetail.data
        }
      });
      setFmlist(list)
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
