import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import './style/tab.less';
import Recommend from './Recommend';
import SongList from './SongList';

interface listData { 
      url:string,
      name:string 
    }
 interface State {
  list: Array<object>;
}

 interface Props {
   home: string;
}

class Discover extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    
    this.state = {
      list: [
        {
          path:'/discover/recommend',
          name:'个性推荐'
        },
        {
          path:'/discover/recommend',
          name:'个性推荐'
        },
        {
          path:'/discover/recommend',
          name:'个性推荐'
        },
        {
          path:'/discover/recommend',
          name:'个性推荐'
        }
      ]
    };
  }
  public render() {
    return (
      <div className="l-disbox">
        <ul className="l-ul">
          {this.state.list.map((item,index)=>{
            console.log(item)
              return <li>
                     <Link to={item.path}>{item.name}</Link>
                    </li>
          })}
          {/* <li>
            <Link to="/discover/recommend">个性推荐</Link>
          </li>
          <li>
            <Link to="/discover/songlist">歌单</Link>
          </li>
          <li>主播电梯</li>
          <li>排行榜</li>
          <li>歌手</li>
          <li>最新音乐</li> */}
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
