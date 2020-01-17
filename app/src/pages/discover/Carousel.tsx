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

  render() {
    const { list } = this.state;
    return (
      <div className="root">
        <div className="slideBox">
          {list.map((item, key) => {
            return (
              <div key={key} className={`slide ${[item.name]}`}>
                <img src={require(`@/assets/images/${key + 1}.jpg`)} alt="" />
                <div className="masking" >{''}</div>
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
