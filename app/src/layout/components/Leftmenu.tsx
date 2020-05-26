import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from '@/layout/index.module.less';

interface ChildrenItem {
  title: string;
  path: string;
  id: string;
  icon: string;
}

interface MenuItem {
  title: string;
  children: Array<ChildrenItem>
}

const menuList: Array<MenuItem> = [
  {
    title: '推荐',
    children: [
      {
        title: '发现音乐',
        path: '/discover',
        id: '/discover',
        icon: 'iconyinfu'
      },
      {
        title: '私人FM',
        path: '/fm',
        id: '/fm',
        icon: 'iconFM'
      }
    ]
  },
  {
    title: '我的音乐',
    children: []
  },
  {
    title: '创建的歌单',
    children: []
  }
];

const Leftmenu: React.FC = (props: any) => {

  const pathname: string = props.location.pathname.split('/')[1];
  const [active, setActive] = useState(`/${pathname}`);

  const ListItems = menuList.map((item, index) => (
    <div className={`${styles['menu-item']}`} key={index}>
      <div className={`${styles['title']}`}>{item.title}</div>
      {
        item.children.map(ele => (
          <Link key={ele.id} to={ele.path} className={active === ele.id ? `${styles['active']}` : ''} onClick={() => setActive(ele.id)}>
            <span className={`iconfont ${ele.icon}`}></span><span>{ele.title}</span>
          </Link>
        ))
      }
    </div>
  ));

  return (
    <div className={`${styles['menu']}`}>
      <div className={`${styles['menu-list']}`}>{ListItems}</div>
    </div >
  );
};

export default withRouter(Leftmenu);
