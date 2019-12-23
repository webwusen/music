import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './style/tab.less';
import Recommend from './Recommend';

const Discover: React.FC = () => (
  <Router>
    <ul className="l-ul">
      <li>
        <Link to="/recommend">个性推荐</Link>
      </li>
      <li>歌单</li>
      <li>主播电梯</li>
      <li>排行榜</li>
      <li>歌手</li>
      <li>最新音乐</li>
    </ul>
    <Route path="/recommend" component={Recommend} />
    {/* <Conternt /> */}
  </Router>
);
// class Discover extends Component {
//   render() {
//     return (

//     );
//   }
// }

export default Discover;
