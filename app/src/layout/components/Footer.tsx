import React, { useState, useEffect, useRef } from 'react';
import styles from '@/layout/index.module.less';
import { SongInfo, SongPlayStatusType } from '@/types/song';
import { SoundFilled } from '@ant-design/icons';
import { connect } from 'react-redux';
import { setSongPlayStatus } from '@/store/actions/index';
import { formatSongDuration, durationTostring } from '@/utils';
import store from '@/store/index';

const Footer: React.FC = ({ songDetail, songPlayStatus, changeSongPlayStatus }: any) => {
  const [song, setSong] = useState<SongInfo>(songDetail);
  const [currentTimeShow, setCurTimeShow] = useState<string>('00:00');
  const [fullTimeShow, setFullTimeShow] = useState<string>('00:00');
  const [fullTime, setFullTime] = useState<number>(0);
  const [barWidth, setBarWidth] = useState<string>('0');
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const music: any = useRef();

  const musicCurrentTime = () => {
    console.log(music.current.currentTime, fullTime);
    const time: number = parseInt(music.current.currentTime);
    const timeStr: string = durationTostring(time);
    let width: string = '0';
    if (fullTime !== 0) {
      width = (time / fullTime * 100) + '%';
    }
    console.log(width);
    setCurTimeShow(timeStr);
    setBarWidth(width)
  };

  useEffect(() => {
    music.current.addEventListener('timeupdate', musicCurrentTime, false);
    return () => {
      music.current.removeEventListener('timeupdate', musicCurrentTime);
    };
  }, [fullTime])

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const songPlayStatus = store.getState().songPlayStatus;
      if (music && music.current) {
        if (songPlayStatus.status === 'play') {
          setIsPlay(true);
          music.current.play()
        } else {
          setIsPlay(false);
          music.current.pause()
        }
      }
    });
    return () => {
      unsubscribe();
    };
  }, [])

  useEffect(() => {
    if (songDetail.songDetailInfo.url !== '' && songDetail.songDetailInfo.url !== song.songDetailInfo.url) {
      setSong(songDetail);
      const ct = '00:00';
      setCurTimeShow(ct);
      const ft = formatSongDuration(songDetail.songInfo.duration);
      setFullTime(ft);
      setTimeout(() => {
        console.log(ft, fullTime);
      }, 0)
      const fts = durationTostring(ft);
      setFullTimeShow(fts);
      changeSongPlayStatus({
        fullTime: ft,
        currentTime: 0,
        fullTimeShow: fts,
        currentTimeShow: ct,
        volume: songPlayStatus.volume
      });
    }
  }, [songDetail]);

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
        <span>{currentTimeShow}</span>
        <div className={`${styles['play-bar']}`}>
          <audio ref={music} src={songDetail.songDetailInfo.url} preload={"auto"} hidden></audio>
          <div className={`${styles['play-bar-in']}`} style={{ width: barWidth }}></div>
          <div className={`${styles['play-bar-btn']}`} style={{ left: barWidth }}></div>
        </div>
        <span>{fullTimeShow}</span>
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
