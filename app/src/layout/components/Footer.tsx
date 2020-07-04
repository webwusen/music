import React, { useState, useEffect } from 'react';
import styles from '@/layout/index.module.less';
import { SongInfo } from '@/types/song';
import { SoundFilled } from '@ant-design/icons';
import { connect } from 'react-redux';
import { setSongInfo } from '@/store/actions/index';
import { formatDuring } from '@/utils/formatDate';

const Footer: React.FC = ({ songDetail, dispatch }: any) => {
  console.log(songDetail);
  const [song, setSong] = useState<SongInfo>(songDetail);
  const [currentTime, setCurTime] = useState<string>('00:00');
  const [fullTime, setFullTime] = useState<string>('00:00');
  const audio: any = document.getElementById('music');

  useEffect(() => {
    if (songDetail.songDetailInfo.url !== '' && songDetail.songDetailInfo.url !== song.songDetailInfo.url) {
      setSong(songDetail);
      setFullTime(formatDuring(songDetail.songInfo.duration));
      // audio.play()
    }
  }, [songDetail, song.songDetailInfo.url])

  return (
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
const storeFooter = connect(mapStateToProps, mapDispatchToProps)(Footer);
export default storeFooter;
