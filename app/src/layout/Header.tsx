import React, { useState, useEffect } from 'react';
import { Avatar, Icon, Input } from 'antd';
import Login from './Login';
const { Search } = Input;



const Header: React.FC = () => {

  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({ userName: '未登录' });

  useEffect(() => {
    const userInfo: any = localStorage.getItem('userInfo');
    if (userInfo) {
      setInfo(JSON.parse(userInfo));
    };
  }, [])

  return (
    <div className="header clearfix">
      <Login show={show} showFunc={setShow} setInfoFunc={setInfo} />
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
        <div className="user-box" onClick={() => setShow(!show)} >
          <div className="user">
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </div>
          <span className="username">{info.userName}</span>
          <Icon type="caret-down" />
        </div>
      </div>
    </div >
  );
};

export default Header;