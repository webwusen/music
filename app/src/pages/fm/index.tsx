import React, { useState, useEffect } from 'react';
import styles from './index.module.less';
import { getPersonalFm, getSongUrl } from '@/api/layout';

const Fm: React.FC = () => {

  const fmValue = [
    {
      name: '',
      artists: [
        {
          name: ''
        }
      ],
      album: {
        name: '',
        picUrl: ''
      }
    }
  ];
  const [fmList, setFmlist] = useState([]);
  const [curFm, setCurFm] = useState(fmValue);

  useEffect(() => {
    getPersonalFm().then(async (res: any) => {
      let list: any;
      await getSong(res.data).then(song => { list = song });
      setFmlist(list);
      const data: any = [list[0]];
      setCurFm(data);
      console.log(list);
    }).catch()
  }, [])

  const getSong = async (data: any[]) => {
    const list: any = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      await getSongUrl({
        id: item.id
      }).then((res: any) => {
        list.push({
          ...item,
          songUrl: res.data[0].url
        })
      });

    }
    return list;
  }

  return (
    <div className={`${styles['fm']}`}>
      <div className={`${styles['song']}`}>
        <div className={`${styles['song-left']}`}>
          <div className={`${styles['music-box']}`}>
            <div className={`${styles['prev-music']}`}></div>
            <div className={`${styles['cur-music']}`}>
              <img className={`${styles['music-pic']}`} alt="" src={curFm[0].album.picUrl+'?params=270y270'} />
            </div>
            <div className={`${styles['next-music']}`}></div>
          </div>
        </div>
        <div className={`${styles['song-right']}`}>
          <div className={`${styles['song-title']}`}>{curFm[0].name}</div>
          <div className={`${styles['song-info']}`}>
            专辑：<span className={`${styles['song-info-box']}`}>{curFm[0].album.name}</span>
            歌手：<span className={`${styles['song-info-box']}`}>{curFm[0].artists[0].name}</span>
          </div>
          <div className={`${styles['song-words']}`}></div>
        </div>
      </div>
    </div>
  )
}

export default Fm;
