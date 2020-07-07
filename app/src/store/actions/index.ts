import { SongInfo, SongPlayStatusType } from '@/types/song';

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

export interface setSongPlayStatusType {
  type: string;
  state: SongPlayStatusType;
}

export const setSongPlayStatus = (state: SongPlayStatusType): setSongPlayStatusType => {
  return {
    type: 'SET_SONG_PLAY_STATUS',
    state
  }
}