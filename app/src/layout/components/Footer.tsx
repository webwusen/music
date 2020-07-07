import React, { useState, useEffect } from 'react';
import styles from '@/layout/index.module.less';
import { SongInfo, SongPlayStatusType } from '@/types/song';
import { SoundFilled } from '@ant-design/icons';
import { connect } from 'react-redux';
import { setSongPlayStatus } from '@/store/actions/index';
import { formatSongDuration, durationTostring } from '@/utils';
import store from '@/store/index';

const Footer: React.FC = ({ songDetail, songPlayStatus, changeSongPlayStatus }: any) => {
  console.log(songDetail);
  const [song, setSong] = useState<SongInfo>(songDetail);
  const [currentTime, setCurTime] = useState<string>('00:00');
  const [fullTime, setFullTime] = useState<string>('00:00');
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const audio: any = document.getElementById('music');

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const songPlayStatus = store.getState().songPlayStatus;
      setTimeout(() => {
        if (audio) {
          try {
            setIsPlay(false);
            audio.pause()
            if (songPlayStatus.status === 'play') {
              setIsPlay(true);
              audio.play()
              // 设置音量
              audio.volume = songPlayStatus.volume
            }
          } catch (e) {
            console.log(e);
          }

        }
      }, 0);
    });

    return () => {
      unsubscribe();
    };
  }, [audio])

  useEffect(() => {
    if (songDetail.songDetailInfo.url !== '' && songDetail.songDetailInfo.url !== song.songDetailInfo.url) {
      setSong(songDetail);
      const ct = '00:00';
      const ft = formatSongDuration(songDetail.songInfo.duration);
      const fts = durationTostring(ft);
      changeSongPlayStatus({
        status: 'play',
        fullTime: ft,
        currentTime: 0,
        fullTimeShow: fts,
        currentTimeShow: ct,
        volume: songPlayStatus.volume
      });
      setCurTime(ct);
      setFullTime(fts);
    }
  }, [songDetail, changeSongPlayStatus, song, songPlayStatus]);

  const handlerSongPlay = () => {
    const status: string = songPlayStatus.status === 'play' ? 'pause' : 'play';
    changeSongPlayStatus({
      ...songPlayStatus,
      status
    })
  };

  return (
    <div className={`${styles['footer']} theme-element-footer`}>
      <div className={`${styles['play-btn']} theme-element-paly-btn`}>
        <div className={`${styles['play-prev']}`}>
          <span className={`iconfont iconprev`}></span>
        </div>
        <div className={`${styles['play-pause']}`} onClick={handlerSongPlay}>
          {
            isPlay ? <span className={`iconfont iconpause`}></span> :
              <span className={`iconfont iconplay`}></span>
          }
        </div>
        <div className={`${styles['play-next']}`}>
          <span className={`iconfont iconnext`}></span>
        </div>
      </div>
      <div className={`${styles['play-box']}`}>
        <span>{currentTime}</span>
        <div className={`${styles['play-bar']}`}>
          <audio id="music" src={songDetail.songDetailInfo.url} preload={"auto"} hidden></audio>
          <div className={`${styles['play-bar-in']}`}></div>
          <div className={`${styles['play-bar-btn']}`}></div>
        </div>
        <span>{fullTime}</span>
      </div>
      <div className={`${styles['play-tools']}`}>
        <SoundFilled />
        <div className={`${styles['play-volume']}`}>
          <div className={`${styles['play-bar-in']}`}></div>
          <div className={`${styles['play-bar-btn']}`}></div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state: any) => {
  return { songDetail: state.songInfo, songPlayStatus: state.songPlayStatus }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeSongPlayStatus: (data: SongPlayStatusType) => {
      dispatch(setSongPlayStatus(data))
    }
  }
}
const storeFooter = connect(mapStateToProps, mapDispatchToProps)(Footer);
export default storeFooter;
