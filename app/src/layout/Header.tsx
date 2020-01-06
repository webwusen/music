import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { login } from '@/api/layout';
interface Props {
  form: any;
}

interface value {
  username: string;
  password: string;
}
const { Search } = Input;

class Login extends React.Component<Props> {
  state = {
    show: false
  };
  changeShow(val: boolean) {
    this.setState({
      show: val
    });
  }
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: Boolean, values: value) => {
      if (!err) {
        console.log('Received values of form: ', values);
        login({
          email: values.username + '@163.com',
          password: values.password
        }).then((res: any) => {
          console.log(res);
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="header clearfix">
        <div className={`login ${this.state.show ? 'show' : ''}`}>
          <div className="login-close" onClick={this.changeShow.bind(this, false)}>
            <Icon type="close" />
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入邮箱' }]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                  suffix="@163.com"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
          </Button>
          </Form>
        </div>
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
const WrappedRegistrationForm = Form.create()(Login);
export default WrappedRegistrationForm;