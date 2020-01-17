import React from 'react';
import './style/Recommend.less';
interface listData {
  name: string;
}
interface State {
  list: Array<listData>;
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
      ]
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
                <img src={require(`@/asset/imgae/${key + 1}.jpg`)} alt="" />
                <div className="masking">{''}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
