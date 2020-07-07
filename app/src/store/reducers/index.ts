import { combineReducers } from 'redux';
import { changeSong, changeSongPlayStatus } from './changeSong';

const reducers = combineReducers({
  songInfo: changeSong,
  songPlayStatus: changeSongPlayStatus
});

export default reducers;