import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './style/tab.less';
import Recommend from './Recommend';
import SongList from './SongList';

interface listData {
  path: string;
  name: string;
  id: number;
}
interface State {
  list: Array<listData>;
}

interface Props {
  home: string;
}

class Discover extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      list: [
        {
          path: '/discover/recommend',
          name: '个性推荐',
          id: 1
        },
        {
          path: '/discover/songlist',
          name: '歌单',
          id: 2
        },
        {
          path: '/discover/recommendsss',
          name: '主播电台',
          id: 3
        },
        {
          path: '/discover/recommendss',
          name: '歌手',
          id: 4
        },
        {
          path: '/discover/recommends',
          name: '最新音乐',
          id: 5
        }
      ]
    };
  }
  public render() {
    const menu = this.state.list.map((item, index) => {
      <li key={index}>
        <Link to={item.path}>{item.name}</Link>
      </li>;
    });
    return (
      <div className="l-disbox">
        <ul className="l-ul">
           {menu}       
        </ul>
        <div>
          {this.props.children}
          <Switch>
            <Route path="/discover/recommend" component={Recommend} />
            <Route path="/discover/songlist" component={SongList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Discover;
