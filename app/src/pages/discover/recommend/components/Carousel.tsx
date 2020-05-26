import React, { useState } from 'react';
import styles from '../index.module.less';
interface listData {
  name: string;
}
interface Props { }

const list: Array<listData> = [
  { name: 'middle' },
  { name: 'start' },
  { name: 'normal' },
  { name: 'normal' },
  { name: 'normal' },
  { name: 'normal' },
  { name: 'normal' },
  { name: 'end' }
]
interface Handler {
  [name: string]: Function;
}

const Carousel: React.FC = (props: Props) => {
  const [current, setCurrent] = useState(0);
  const [ilist, setList] = useState(list);

  const slide = (name: string, key: number) => {

    setCurrent(key)
    imgArr(name);

  };

  const carouselHandler: Handler = {
    'start': (arr: Array<listData>) => {
      const pop: any = arr.pop();
      arr.unshift(pop); // 尾部元素添加到数组头部
      setList(arr)
    },
    'end': (arr: Array<listData>) => {
      const shift: any = arr.shift(); // 从数组头部弹出一个元素
      arr.push(shift);
      setList(arr)// 保存重新排列的数组 并触发render
    }
  };

  const imgArr = (name: string) => { // 数组处理
    carouselHandler[name](ilist)
  }

  const pointFunc = (index: number) => {
    const dirCopy = ilist;
    if (index < current) { // 鼠标经过左侧的按钮
      for (let i = 0; i < (current - index); i += 1) { // 判断距离
        const shift: any = dirCopy.shift(); // 进行数组操作
        dirCopy.push(shift);
      }
    } else { // 鼠标经过右侧的按钮
      for (let i = 0; i < (index - current); i += 1) {
        const pop: any = dirCopy.pop();
        dirCopy.unshift(pop);
      }
    }
    setList(dirCopy)// 触发react-render重新渲染页面
    setCurrent(index)// 记录当前图片节点
  }
  return (
    <div className={`${styles['root']}`} >
      <div className={`${styles['slideBox']}`}>
        {ilist.map((item, key) => {
          return (
            <div key={key} className={`${styles['slide']} ${styles[item.name]}`} >
              <img src={require(`@/assets/images/${key + 1}.jpg`)} alt="" />
              <div className={`${styles['masking']}`} onClick={() => slide(item.name, key)}></div>
            </div>
          );
        })}
        <div className={`${styles['point']}`}>
          {
            ilist.map((item, key) => {
              return (
                <span
                  key={key}
                  className={`${styles[item.name]}` === `${styles['start']}` ? `${styles['hover']}` : ''}
                  onMouseEnter={() => pointFunc(key - 1)}
                >{}</span>
              );
            })
          }
        </div>
      </div>
    </div>

  );
};


export default Carousel;
