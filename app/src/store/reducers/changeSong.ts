import { SetSongInfoType, setSongPlayStatusType } from '../actions/index';
import { SongInfo, SongPlayStatusType } from '@/types/song';

const initialSong: SongInfo = {
  songDetailInfo: {},
  lyric: [],
  tlyric: [],
  songInfo: {}
};

export const changeSong = (state = initialSong, action: SetSongInfoType): SongInfo => {
  switch (action.type) {
    case 'SET_SONG_INFO':
      return {
        ...state,
        ...action.state
      };
    default:
      return state;
  }
};

const initialSongPlayStatus: SongPlayStatusType = {
  currentTime: 0,
  fullTime: 0,
  currentTimeShow: '00:00',
  fullTimeShow: '00:00',
  status: 'pause',
  volume: 0.05
}

export const changeSongPlayStatus = (state = initialSongPlayStatus, action: setSongPlayStatusType) => {
  switch (action.type) {
    case 'SET_SONG_PLAY_STATUS':
      return {
        ...state,
        ...action.state
      };
    default:
      return state
  }
};
