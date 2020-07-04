import { SongInfo } from '@/types/song';

export interface SetSongInfoType {
  type: string;
  state: SongInfo;
}

export const setSongInfo = (state: SongInfo): SetSongInfoType => {
  return {
    type: 'SET_SONG_INFO',
    state
  };
};
