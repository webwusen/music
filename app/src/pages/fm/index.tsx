import React, { useState, useEffect } from 'react';
import styles from './index.module.less';
import { getPersonalFm } from '@/api/layout';
import getSongDetails from '@/utils/getSongDetail';
import { SongInfo } from '@/types/song';
import { connect } from 'react-redux';
import { setSongInfo } from '@/store/actions/index';

const Fm: React.FC = ({ changeSong }: any) => {

  const fmValue: SongInfo[] = [
    {
      songInfo: {
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
      },
      songDetailInfo: {
        url: ''
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
  const [fmList, setFmlist] = useState<SongInfo[]>([]);
  const [curFm, setCurFm] = useState<SongInfo[]>(fmValue);

  useEffect(() => {
    // 获取fm
    getPersonalFm().then(async (res: any) => {
      let list: SongInfo[] = [];
      await getSong(res.data).then(song => { list = song });
      setFmlist(list);
      let data: SongInfo[] = [];
      if (list.length > 0) {
        data = [list[0]];
      }
      setCurFm(data);
    })
  }, []);

  useEffect(() => {
    changeSong(curFm[0]);
  }, [curFm, changeSong])

  // 获取歌曲url、歌曲歌词
  const getSong = async (data: any[]) => {
    const list: SongInfo[] = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      await getSongDetails(item.id).then(res => { list.push({ ...res, songInfo: item }) });
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
              <img className={`${styles['music-pic']}`} alt="" src={curFm[0].songInfo.album.picUrl + '?params=270y270'} />
            </div>
            <div className={`${styles['next-music']}`}></div>
          </div>
        </div>
        <div className={`${styles['song-right']}`}>
          <div className={`${styles['song-title']}`}>{curFm[0].songInfo.name}</div>
          <div className={`${styles['song-info']}`}>
            <div>
              专辑：<span className={`${styles['song-info-box']}`} title={curFm[0].songInfo.album.name}>{curFm[0].songInfo.album.name}</span>
            </div>
            <div>
              歌手：<span className={`${styles['song-info-box']}`} title={curFm[0].songInfo.artists[0].name}>{curFm[0].songInfo.artists[0].name}</span>
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

const mapStateToProps = (state: SongInfo) => {
  return { songDetail: state.songInfo }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeSong: (data: SongInfo) => {
      dispatch(setSongInfo(data))
    }
  }
}
const songFm = connect(mapStateToProps, mapDispatchToProps)(Fm);
export default songFm;
