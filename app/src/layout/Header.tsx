import React, { useState } from 'react';
import { Icon, Input } from 'antd';
import Login from './Login';
const { Search } = Input;

const Header: React.FC = () => {

  const [show, setShow] = useState(false);

  return (
    <div className="header clearfix">
      <Login show={show} showFunc={setShow} />
      <div className="logo fl">
        <div className="login-icon">
          <span className="iconfont iconwangyiyunyinle"></span>
        </div>音乐台
        </div>
      <div className="tools fl">
        <div className="page-btn">
          <span>
            <Icon type="left" />
          </span>
          <span>
            <Icon type="right" />
          </span>
        </div>
        <div className="search-bar">
          <Search
            placeholder="搜索音乐，视频，歌词，电台"
            onSearch={value => console.log(value)}
          />
        </div>
      </div>
      <div className="user-bar fr">
        <div className="user-box" onClick={() => setShow(true)} >
          <div className="user">
            <Icon type="user" />
          </div>
          <span className="username">未登录</span>
          <Icon type="caret-down" />
        </div>
      </div>
    </div >
  );
};

export default Header;