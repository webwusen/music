import React, { useState, useEffect } from 'react';
import { Avatar, Icon, Input, Popover } from 'antd';
import Login from './Login';
import styles from '../index.module.less';
import { localStorageGet } from '@/utils/localStorage';

const { Search } = Input;

interface themeFunc {
  (info: string): void;
}

interface Props {
  theme: string;
  themeFunc: themeFunc;
}
const Header: React.FC<Props> = (props: Props) => {

  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({ userName: '未登录' });

  useEffect(() => {
    const userInfo: any = localStorageGet('userInfo');
    if (userInfo) {
      setInfo(JSON.parse(userInfo));
    };
  }, []);

  // 皮肤列表
  const skinList = [
    {
      name: '官方红',
      id: 'theme-default',
      class: 'red'
    },
    {
      name: '炫酷黑',
      id: 'theme-black',
      class: 'black'
    },
    {
      name: '清新绿',
      id: 'theme-green',
      class: 'green'
    }
  ];

  // 通知父组件换肤
  const changeTheme = (id: string) => {
    props.themeFunc(id)
  }

  // 换肤dom
  const skin = skinList.map(item =>
    <div key={item.id} className={`${styles['skin-item-box']} ${styles[item.class]}`}>
      <div className={`${styles['skin-item']} ${item.id === props.theme ? styles['show'] : ''}`} onClick={() => changeTheme(item.id)}>
        <p>{item.name}</p>
        <span className={`iconfont iconpitchon`}></span>
      </div>
    </div>
  )

  return (
    <div className={`${styles['header']} theme-element-header clearfix`}>
      <Login show={show} showFunc={setShow} setInfoFunc={setInfo} />
      <div className={`${styles['logo']} fl`}>
        <div className={`${styles['login-icon']} theme-element-logo-icon`}>
          <span className="iconfont iconlogo"></span>
        </div>音乐台
      </div>
      <div className={`${styles['tools']} fl`}>
        <div className={`${styles['page-btn']} theme-element-page-btn`}>
          <span>
            <Icon type="left" />
          </span>
          <span>
            <Icon type="right" />
          </span>
        </div>
        <div className={`${styles['search-bar']} theme-element-search-bar`}>
          <Search
            placeholder="搜索音乐，视频，歌词，电台"
            onSearch={value => console.log(value)}
          />
        </div>
      </div>
      <div className={`${styles['user-bar']} fr`}>
        <div className={`${styles['user-box']}`} onClick={() => setShow(!show)} >
          <div className={`${styles['user']}`}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </div>
          <span className={`${styles['username']}`}>{info.userName}</span>
          <Icon type="caret-down" />
        </div>
        <div className={`${styles['skin']}`}>
          <Popover placement="bottom" content={<div className={`${styles['skin-box']}`}>{skin}</div>} trigger="click">
            <span className="iconfont icontheme"></span>
          </Popover>
        </div>
        <div className={`${styles['message']}`}>
          <Popover placement="bottom" content={<div>111</div>} trigger="click">
            <span className="iconfont iconyouxiang"></span>
          </Popover>
        </div>
      </div>
    </div >
  );
};

export default Header;