import React from 'react';
import { Icon, Input } from 'antd';
import { login } from '@/api/layout';
import Login from './Login';
interface Props {
  [propName: string]: any
}

interface value {
  username: string;
  password: string;
}
const { Search } = Input;

class Header extends React.Component<Props, Object> {
  state = {
    show: false
  }
  changeShow = (val: boolean) => {
    this.setState({
      show: val
    });
  }
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: Boolean, values: value) => {
      if (!err) {
        login({
          email: values.username + '@163.com',
          password: values.password
        }).then((res: any) => {
          console.log(res);
        });
      }
    });
  }

  render() {
    return (
      <div className="header clearfix">
        <Login show={this.state.show} showFunc={this.changeShow} />
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
          <div className="user-box" onClick={this.changeShow.bind(this, true)} >
            <div className="user">
              <Icon type="user" />
            </div>
            <span className="username">未登录</span>
            <Icon type="caret-down" />
          </div>
        </div>
      </div >

    );
  }
}

export default Header;