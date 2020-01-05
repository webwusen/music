import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Leftmenu: React.FC = () => {

  const [active, setActive] = useState('/discover');

  return (
    <div className="menu">
      <div className="title">推荐</div>
      <div className="menu-list">
        <Link to="/discover" className={active === '/discover' ? 'active' : ''} onClick={() => setActive('/discover')}>
          <span className="iconfont iconyinfu"></span><span>发现音乐</span>
        </Link>
        <Link to="/fm" className={active === '/fm' ? 'active' : ''} onClick={() => setActive('/fm')}>
          <span className="iconfont iconFM"></span><span>私人FM</span>
        </Link>
      </div>
      <div className="title">我的音乐</div>
      <div className="title">创建的歌单</div>
    </div >
  );
};

export default Leftmenu;
