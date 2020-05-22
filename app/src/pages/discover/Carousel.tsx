import React from 'react';
import './style/Recommend.less';
interface listData {
  name: string;
}
interface State {
  list: Array<listData>;
  current: number
}

interface Props { }
class Carousel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      list: [
        { name: 'middle' },
        { name: 'start' },
        { name: 'normal' },
        { name: 'normal' },
        { name: 'normal' },
        { name: 'normal' },
        { name: 'normal' },
        { name: 'end' }
      ],
      current: 0,
    };
  }
  slide = (name: string, key: number) => {
    this.setState({ current: key });
    this.imgArr(name);
  }
  imgArr(name: string) { // 数组处理
    let dirCopy = this.state.list;
    if (name === 'start') {  // 点击左侧那张
      const pop: any = dirCopy.pop();
      dirCopy.unshift(pop); // 尾部元素添加到数组头部
    } else if (name === 'end') { // 点击右侧那张
      const shift: any = dirCopy.shift(); // 从数组头部弹出一个元素
      dirCopy.push(shift);  // 添加到数组尾部
    }
    this.setState({ list: dirCopy }); // 保存重新排列的数组 并触发render
  }
  pointFunc = (index: number) => {
    const { current } = this.state;
    const dirCopy = this.state.list;
    if (index < current) { // 鼠标经过左侧的按钮
      for (let i = 0; i < (current - index); i += 1) { // 判断距离
        const shift: any = dirCopy.shift(); // 进行数组操作
        dirCopy.push(shift);
      }
    } else if (index > current) { // 鼠标经过右侧的按钮
      for (let i = 0; i < (index - current); i += 1) {
        const pop: any = dirCopy.pop();
        dirCopy.unshift(pop);
      }
    }
    this.setState({ list: dirCopy }); // 触发react-render重新渲染页面
    this.setState({ current: index }); // 记录当前图片节点
  }
  render() {
    const { list } = this.state;
    return (
      <div className="root">
        <div className="slideBox">
          {list.map((item, key) => {
            return (
              <div key={key} className={`slide ${[item.name]}`}>
                <img src={require(`@/assets/images/${key + 1}.jpg`)} alt="" />
                <div className="masking" onClick={() => this.slide(item.name, key)}>{''}</div>
              </div>
            );
          })}
          <div className='point'>
            {
              this.state.list.map((item, key) => {
                return (
                  <span
                    key={key}
                    className={item.name === 'start' ? 'point.hover' : ''}
                    onMouseEnter={() => this.pointFunc(key - 1)}
                  >{}</span>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
