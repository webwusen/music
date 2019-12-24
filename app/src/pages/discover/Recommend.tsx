import React from 'react';
import './style/RecommEnd.less';
const Recommend: React.FC = () => (
  <div className="l-rec">
    {/* 轮播 */}
    <div className="l-carousel"></div>
    {/* 推荐歌单 */}
    <div className="l-push">
      <div className="l-title">
        <p>推荐歌单</p>
      </div>
      <div className="l-more">
        <a href="/">更多></a>
      </div>
    </div>
    {/* 歌单 */}
    <div className="l-songlist">
      <ul>
        <li>
          <a href="/">
            <div className="l-songimg">
              <div className='l-maskbox'>
                   <div className='l-mask'></div> 
                   <p>根据您的音乐口味生成每日更新每日更新每日更新每日更新每日更新每日更新</p>
              </div>  
            </div>
            <p>每日歌曲推荐</p>
          </a>
        </li>
        <li>
          <a href="/">
            <div className="l-songimg"></div>
            <p>每日歌曲推荐</p>
          </a>
        </li>
        <li>
          <a href="/">
            <div className="l-songimg"></div>
            <p>每日歌曲推荐</p>
          </a>
        </li>
        <li>
          <a href="/">
            <div className="l-songimg"></div>
            <p>每日歌曲推荐</p>
          </a>
        </li>
        <li>
          <a href="/">
            <div className="l-songimg"></div>
            <p>每日歌曲推荐</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Recommend;
