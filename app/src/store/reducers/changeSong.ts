import { SetSongInfoType } from '../actions/index';
import { SongInfo } from '@/types/song';
const initialSong: SongInfo = {
  songDetailInfo: {},
  lyric: [],
  tlyric: [],
  songInfo: {}
};

const changeSong = (state = initialSong, action: SetSongInfoType): SongInfo => {
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

export default changeSong;
