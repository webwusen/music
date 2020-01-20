import React, { useState } from 'react';
import { Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import './style/tab.less';
import Recommend from './Recommend';
import SongList from './SongList';

interface listData {
  path: string;
  name: string;
}

interface Props {
  [propName: string]: any;
}

const list: Array<listData> = [
  {
    path: '/discover/recommend',
    name: '个性推荐'
  },
  {
    path: '/discover/songlist',
    name: '歌单'
  },
  {
    path: '/discover/station',
    name: '主播电台'
  },
  {
    path: '/discover/singer',
    name: '歌手'
  },
  {
    path: '/discover/lastestmusic',
    name: '最新音乐'
  }
];
const Discover: React.FC = (props: Props) => {
  const pathname: string = props.location.pathname.split('/');
  const [active, setActive] = useState(`/${pathname[1]}/${pathname[2]}`);
  const menu = list.map((item, index) => (
    <li
      key={item.path}
      className={item.path === active ? 'l-active' : undefined}
      onClick={() => setActive(item.path)}
    >
      <Link className={item.path === active ? 'l-textc' : undefined} to={item.path}>
        {item.name}
      </Link>
    </li>
  ));
  return (
    <div className="l-disbox">
      <ul className="l-ul">{menu}</ul>
      <div>
        {props.children}
        <Switch>
          <Route path="/discover/recommend" component={Recommend} />
          <Route path="/discover/songlist" component={SongList} />
          <Redirect exact from="/discover" to="/discover/recommend" />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Discover);
