import React, { useState, useEffect } from 'react';
import { Avatar, Icon, Input } from 'antd';
import Login from './Login';
import styles from '@/layout/index.module.less';

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
    <div className={`${styles['header']} clearfix`}>
      <Login show={show} showFunc={setShow} setInfoFunc={setInfo} />
      <div className={`${styles['logo']} fl`}>
        <div className={`${styles['login-icon']}`}>
          <span className="iconfont iconwangyiyunyinle"></span>
        </div>音乐台
      </div>
      <div className={`${styles['tools']} fl`}>
        <div className={`${styles['page-btn']}`}>
          <span>
            <Icon type="left" />
          </span>
          <span>
            <Icon type="right" />
          </span>
        </div>
        <div className={`${styles['search-bar']}`}>
          <Search
            placeholder="搜索音乐，视频，歌词，电台"
            onSearch={value => console.log(value)}
          />
        </div>
      </div>
      <div className={`${styles['user-bar']} fr`}>
        <div className={`${styles['user-box']}`} onClick={() => setShow(!show)} >
          <div className="user">
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </div>
          <span className={`${styles['username']}`}>{info.userName}</span>
          <Icon type="caret-down" />
        </div>
      </div>
    </div >
  );
};

export default Header;