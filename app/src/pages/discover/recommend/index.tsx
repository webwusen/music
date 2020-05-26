import React from 'react';
import styles from './index.module.less';
import Carousel from './components/Carousel';
const Recommend: React.FC = () => (
  <div className={`${styles['l-rec']}`}>
    {/* 轮播 */}
    <div className={`${styles['l-carousel']}`}>
      <Carousel />
    </div>
    {/* 推荐歌单 */}
    <div className={`${styles['l-push']}`} >
      <div className={`${styles['l-title']}`} >
        <p>推荐歌单</p>
      </div>
      <div className={`${styles['l-more']}`} >
        <a href="/">更多></a>
      </div>
    </div>
    {/* 歌单 */}
    <div className={`${styles['l-songlist']}`} >
      <ul>
        <li>
          <a href="/">
            <div className={`${styles['l-songimg']}`} >
              <div className={`${styles['l-maskbox']}`} >
                <div className={`${styles['l-mask']}`} ></div>
                <p>根据您的音乐口味生成每日更新每日更新每日更新每日更新每日更新每日更新</p>
              </div>
            </div>
            <p>每日歌曲推荐</p>
          </a>
        </li>
      </ul>
    </div>
    {/* 独家放送 */}
    <div className={`${styles['l-push']}`}>
      <div className="l-title">
        <p>独家放送</p>
      </div>
      <div className={`${styles['l-more']}`} >
        <a href="/">更多></a>
      </div>
    </div>
  </div>
);

export default Recommend;
