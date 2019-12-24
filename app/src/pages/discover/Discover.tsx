import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './style/tab.less';
import Recommend from './RecommEnd';
import SongList from './SongList';

interface listData {
  path: string;
  name: string;
  currentIndex: number;
}
interface State {
  list: Array<listData>;
  active: number;
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
          currentIndex: 0
        },
        {
          path: '/discover/songlist',
          name: '歌单',
          currentIndex: 1
        },
        {
          path: '/discover/recommend',
          name: '主播电台',
          currentIndex: 2
        },
        {
          path: '/discover/recommend',
          name: '歌手',
          currentIndex: 3
        },
        {
          path: '/discover/recommend',
          name: '最新音乐',
          currentIndex: 4
        }
      ],
      active: 0
    };
  }
  public switchClass = (index: any) => {
    this.setState({
      active: index
    });
  };
  public render() {
    const menu = this.state.list.map((item, index) => (
      <li
        key={index}
        className={index === this.state.active ? 'l-active' : undefined}
        onClick={() => this.switchClass(index)}
      >
        <Link className={index === this.state.active ? 'l-textc' : undefined} to={item.path}>{item.name}</Link>
      </li>
    ));
    return (
      <div className="l-disbox">
        <ul className="l-ul">{menu}</ul>
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
