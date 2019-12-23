import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './style/tab.less';
import Recommend from './Recommend';
import SongList from './SongList';

const Discover: React.FC = (props) => (
  <div className="l-disbox">
    <ul className="l-ul">
      <li>
        <Link to="/discover/recommend">个性推荐</Link>
      </li>
      <li>
        <Link to="/discover/songlist">歌单</Link>
      </li>
      <li>主播电梯</li>
      <li>排行榜</li>
      <li>歌手</li>
      <li>最新音乐</li>
    </ul>
    <div>
      {props.children}
      <Switch>
        <Route path="/discover/recommend" component={Recommend} />
        <Route path="/discover/songlist" component={SongList} />
      </Switch>
    </div>
  </div>
);

export default Discover;
