import { combineReducers } from 'redux';
import changeSong from './changeSong';

const reducers = combineReducers({
  songInfo: changeSong
});

export default reducers;