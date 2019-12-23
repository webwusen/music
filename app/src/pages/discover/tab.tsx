import React from 'react';
import './style/tab.less';
import { Link } from 'react-router-dom';
const Tab: React.FC = () => (
  <div>
      <ul className="l-ul">
        <li>
          <Link to="/recommend">
            <span>个性推荐</span>
          </Link>
        </li>
        <li>歌单</li>
        <li>主播电梯</li>
        <li>排行榜</li>
        <li>歌手</li>
        <li>最新音乐</li>
      </ul>
  </div>
);

export default Tab;
