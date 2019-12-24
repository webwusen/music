import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import './style/tab.less';
import Recommend from './Recommend';
import SongList from './SongList';

interface listData {
  path: string;
  name: string;
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
          name: '个性推荐'
        },
        {
          path: '/discover/songlist',
          name: '歌单'
        },
        {
          path: '/discover/recommend',
          name: '主播电台'
        },
        {
          path: '/discover/recommend',
          name: '歌手'
        },
        {
          path: '/discover/recommend',
          name: '最新音乐'
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
            <Redirect exact from="/discover" to="/discover/recommend" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Discover;
