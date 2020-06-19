import React, { useState, useEffect } from 'react';
import styles from './index.module.less';
import { getPersonalFm } from '@/api/layout';
import getSongDetails from '@/utils/getSongDetail';

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
      },
      lyric: [
        {
          time: '',
          words: ''
        }
      ],
      tlyric: [
        {
          time: '',
          words: ''
        }
      ]
    }
  ];
  const [fmList, setFmlist] = useState([]);
  const [curFm, setCurFm] = useState(fmValue);

  useEffect(() => {
    // 获取fm
    getPersonalFm().then(async (res: any) => {
      let list: any;
      await getSong(res.data).then(song => { list = song });
      setFmlist(list);
      const data: any = [list[0]];
      setCurFm(data);
    })
  }, []);

  // 获取歌曲url、歌曲歌词
  const getSong = async (data: any[]) => {
    const list: any = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      let songDetail = {};
      await getSongDetails(item.id).then(res => { songDetail = res });
      list.push({
        ...item,
        ...songDetail
      })
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
              <img className={`${styles['music-pic']}`} alt="" src={curFm[0].album.picUrl + '?params=270y270'} />
            </div>
            <div className={`${styles['next-music']}`}></div>
          </div>
        </div>
        <div className={`${styles['song-right']}`}>
          <div className={`${styles['song-title']}`}>{curFm[0].name}</div>
          <div className={`${styles['song-info']}`}>
            <div>
              专辑：<span className={`${styles['song-info-box']}`} title={curFm[0].album.name}>{curFm[0].album.name}</span>
            </div>
            <div>
              歌手：<span className={`${styles['song-info-box']}`} title={curFm[0].artists[0].name}>{curFm[0].artists[0].name}</span>
            </div>
          </div>
          <div className={`${styles['song-words']}`}>
            {
              curFm[0].lyric.length > 0
                ?
                curFm[0].lyric.map((item, index) =>
                  item.words !== ''
                    ?
                    <div className={`${styles['words']}`} key={index}>
                      <p>{item.words}</p>
                      <p>{curFm[0].tlyric[index] && curFm[0].tlyric[index].words}</p>
                    </div>
                    :
                    null
                )
                :
                <p className={`${styles['no-lyric']}`}>暂无歌词</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fm;
